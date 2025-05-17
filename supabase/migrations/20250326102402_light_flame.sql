/*
  # Create domain_offers table
  
  1. New Tables
    - `domain_offers`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `company` (text, nullable)
      - `offer_amount` (text, not null)
      - `phone` (text, nullable)
      - `message` (text, nullable)
      - `created_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on `domain_offers` table
    - Add policy for service role to read all entries
*/

CREATE TABLE IF NOT EXISTS domain_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  offer_amount text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now(),
  responded boolean DEFAULT false,
  response_notes text
);

-- Enable Row Level Security
ALTER TABLE domain_offers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Service role can read all domain offers" 
  ON domain_offers 
  FOR SELECT 
  TO service_role 
  USING (true);

CREATE POLICY "Service role can insert domain offers" 
  ON domain_offers 
  FOR INSERT 
  TO service_role 
  WITH CHECK (true);

CREATE POLICY "Service role can update domain offers" 
  ON domain_offers 
  FOR UPDATE 
  TO service_role 
  USING (true);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS domain_offers_email_idx ON domain_offers (email);