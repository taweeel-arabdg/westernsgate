-- Make created_by nullable and add default for is_active
ALTER TABLE gtm_configs ALTER COLUMN created_by DROP NOT NULL;
ALTER TABLE gtm_configs ALTER COLUMN is_active SET DEFAULT true;