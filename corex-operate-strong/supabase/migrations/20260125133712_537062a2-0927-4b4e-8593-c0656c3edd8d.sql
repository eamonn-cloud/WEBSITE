-- Add RLS policy to deny direct SELECT access to career_applications
-- This table contains sensitive PII (emails, phone numbers, CV paths) that should not be publicly readable

CREATE POLICY "No public read access to applications"
ON public.career_applications
FOR SELECT
USING (false);