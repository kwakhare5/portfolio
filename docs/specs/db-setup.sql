-- SQL script to set up database tables in your Supabase SQL Editor

-- 1. Create table for dynamic portfolio data
CREATE TABLE IF NOT EXISTS portfolio_data (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE portfolio_data ENABLE ROW LEVEL SECURITY;

-- Allow public read access to portfolio data
CREATE POLICY "Allow public read access" ON portfolio_data
    FOR SELECT USING (true);

-- Allow all actions for admin (controlled via supabase client with service role key)
CREATE POLICY "Allow admin full access" ON portfolio_data
    FOR ALL USING (true);


-- 2. Create table for anonymous feedback submissions
CREATE TABLE IF NOT EXISTS feedback (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'unread',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous insert access
CREATE POLICY "Allow public feedback insertion" ON feedback
    FOR INSERT WITH CHECK (true);

-- Allow select/update/delete for admin via service role client
CREATE POLICY "Allow admin access to feedback" ON feedback
    FOR ALL USING (true);



