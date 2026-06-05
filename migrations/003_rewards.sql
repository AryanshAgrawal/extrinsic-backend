CREATE TABLE xp_ledger (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    amount INT NOT NULL,
    reason VARCHAR(100),
    earned_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE coin_ledger (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    amount INT NOT NULL,
    type VARCHAR(10),
    reason VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE buddy_pairs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_a_id UUID REFERENCES users(id),
    user_b_id UUID REFERENCES users(id),
    status VARCHAR(10) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    plan VARCHAR(10),
    razorpay_sub_id VARCHAR(100),
    starts_at TIMESTAMP,
    ends_at TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active'
);