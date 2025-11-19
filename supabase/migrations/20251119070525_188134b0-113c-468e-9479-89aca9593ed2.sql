-- Drop the insecure SELECT policy that allows anyone to view all contact requests
DROP POLICY IF EXISTS "Public can view their own requests" ON public.contact_requests;

-- The INSERT policy is fine - it allows anyone to submit contact forms
-- But we don't need public SELECT access at all
-- Admin access can be added later if needed through a separate admin system