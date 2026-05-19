-- ══════════════════════════════════════════════════
--  SUPABASE SETUP — Yüksək Potensial (HiPo) Qiymətləndirmə
--  SQL Editor → New query → yapışdır → Run
-- ══════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS employees (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  id_code TEXT NOT NULL UNIQUE,
  manager_id TEXT DEFAULT '',
  manager_name TEXT DEFAULT '',
  manager_mail TEXT DEFAULT '',
  company TEXT DEFAULT '',
  full_name TEXT NOT NULL,
  job_title TEXT DEFAULT '',
  division TEXT DEFAULT '',
  department TEXT DEFAULT '',
  subdepartment TEXT DEFAULT '',
  unit TEXT DEFAULT '',
  subunit TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_emp_mgr ON employees(manager_mail);
CREATE INDEX idx_emp_code ON employees(id_code);

CREATE TABLE IF NOT EXISTS hipo_assessments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  evaluator_email TEXT NOT NULL,
  evaluator_name TEXT DEFAULT '',
  employee_idcode TEXT NOT NULL,
  employee_name TEXT DEFAULT '',
  department TEXT DEFAULT '',
  job_title TEXT DEFAULT '',
  is_hipo BOOLEAN NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(evaluator_email, employee_idcode)
);
CREATE INDEX idx_hipo_eval ON hipo_assessments(evaluator_email);
CREATE INDEX idx_hipo_emp ON hipo_assessments(employee_idcode);

-- RLS
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE hipo_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "emp_read" ON employees FOR SELECT USING (true);
CREATE POLICY "hipo_read" ON hipo_assessments FOR SELECT USING (true);
CREATE POLICY "hipo_ins" ON hipo_assessments FOR INSERT WITH CHECK (true);
CREATE POLICY "hipo_upd" ON hipo_assessments FOR UPDATE USING (true);
CREATE POLICY "hipo_del" ON hipo_assessments FOR DELETE USING (true);

-- ══════════════════════════════════════════════════
--  Excel IMPORT:
--  Table Editor → employees → Import data → CSV
--  ID Code → id_code, Manager mail → manager_mail,
--  Full name → full_name, Job title → job_title, və s.
-- ══════════════════════════════════════════════════
