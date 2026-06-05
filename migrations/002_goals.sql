CREATE TABLE goals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(50),
  deadline DATE,
  progress_pct INT DEFAULT 0,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE milestones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  goal_id UUID REFERENCES goals(id) ON DELETE CASCADE,
  title VARCHAR(255),
  due_date DATE,
  completed BOOLEAN DEFAULT FALSE,
  order_index INT
);
CREATE TABLE missions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  goal_id UUID REFERENCES goals(id),
  scheduled_date DATE NOT NULL,
  difficulty VARCHAR(10) DEFAULT 'medium',
  status VARCHAR(10) DEFAULT 'pending',
  xp_reward INT DEFAULT 50,
  completed_at TIMESTAMP
);

CREATE TABLE mission_tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  mission_id UUID REFERENCES missions(id) ON DELETE CASCADE,
  description TEXT,
  checked BOOLEAN DEFAULT FALSE,
  order_index INT
);