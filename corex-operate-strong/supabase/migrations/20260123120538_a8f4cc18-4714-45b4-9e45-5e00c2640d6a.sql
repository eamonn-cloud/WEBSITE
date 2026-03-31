-- Create career_applications table
CREATE TABLE public.career_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  target_role TEXT NOT NULL,
  linkedin_url TEXT,
  cv_file_path TEXT NOT NULL,
  cover_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public application form)
CREATE POLICY "Anyone can submit applications"
ON public.career_applications
FOR INSERT
WITH CHECK (true);

-- Create storage bucket for CV uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'career-cvs',
  'career-cvs',
  false,
  5242880,  -- 5MB limit
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
);

-- Allow public uploads to career-cvs bucket
CREATE POLICY "Anyone can upload CVs"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'career-cvs');

-- Allow reading uploaded CVs (for admin access)
CREATE POLICY "Authenticated users can read CVs"
ON storage.objects
FOR SELECT
USING (bucket_id = 'career-cvs' AND auth.role() = 'authenticated');