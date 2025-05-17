/*
  # Add anonymous insert policy for domain_offers

  1. New Policies
    - Add policy to allow anonymous users to insert into domain_offers table
    - This fixes the RLS error when submitting the domain offer form
  
  The existing policies only allow service_role to insert, but the client is using
  the anon key, so we need to add a policy for anonymous users as well.
*/

-- Create policy for anonymous users to insert into domain_offers
CREATE POLICY "Anonymous users can insert domain offers" 
  ON domain_offers 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);