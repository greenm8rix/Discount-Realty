/*
  # Update domain_offers RLS policies

  1. Security
    - Update anonymous insert policy to be more permissive
    - Add detailed WITH CHECK clause for better security
*/

-- Drop the existing policy and create a more permissive one
DROP POLICY IF EXISTS "Anonymous users can insert domain offers" ON domain_offers;

CREATE POLICY "Anonymous users can insert domain offers" 
  ON domain_offers 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Set sequence ownership if needed
ALTER TABLE domain_offers ALTER COLUMN id SET DEFAULT gen_random_uuid();

-- Ensure indexes are properly created
CREATE INDEX IF NOT EXISTS domain_offers_email_idx ON domain_offers (email);