-- Run this once against your MySQL database (via cPanel's phpMyAdmin, or
-- the mysql command line) to create the tables the site needs.

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(500) NOT NULL,
  excerpt TEXT,
  category VARCHAR(100),
  format VARCHAR(100),
  author VARCHAR(255) DEFAULT 'PHEXARA Team',
  post_date DATE,
  read_time VARCHAR(50) DEFAULT '5 min read',
  cover_image VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  content LONGTEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_category (category),
  INDEX idx_post_date (post_date)
);

CREATE TABLE IF NOT EXISTS images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  data LONGBLOB NOT NULL,
  content_type VARCHAR(100) NOT NULL,
  filename VARCHAR(255),
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);