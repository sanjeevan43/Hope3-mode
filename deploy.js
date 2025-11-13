const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Deploy to GitHub Pages
  console.log('🌐 Deploying to GitHub Pages...');
  
  // Install gh-pages if not already installed
  try {
    require.resolve('gh-pages');
  } catch (e) {
    console.log('📥 Installing gh-pages...');
    execSync('npm install --save-dev gh-pages', { stdio: 'inherit' });
  }

  // Deploy
  execSync('npx gh-pages -d build', { stdio: 'inherit' });
  
  console.log('✅ Deployment successful!');
  console.log('🌍 Your site will be available at: https://sanjeevan43.github.io/Hope3-mode/');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}