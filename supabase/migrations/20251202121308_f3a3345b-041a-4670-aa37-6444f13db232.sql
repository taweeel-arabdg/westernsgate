-- Add SELECT policy for admins to view contact requests
CREATE POLICY "Admins can view contact requests"
ON public.contact_requests
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add UPDATE policy for admins to manage contact requests (optional but useful)
CREATE POLICY "Admins can update contact requests"
ON public.contact_requests
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add DELETE policy for admins to remove spam/invalid requests
CREATE POLICY "Admins can delete contact requests"
ON public.contact_requests
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));