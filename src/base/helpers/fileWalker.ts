import fs from 'fs';
import path from 'path';

// Check if tsconfig.json exists to include .ts files
const hasTsConfig = fs.existsSync(path.join(process.cwd(), 'tsconfig.json')); 

// Function to walk through directories and find all route files
export const walkSync = (dir: string, fileList: string[] = []): string[] => {
  const files = fs.readdirSync(dir);

  const allowedExtensions = hasTsConfig
    ? ['.ts', '.js', '.cjs', '.mjs', '.cts', '.mts'] // Include .ts files if tsconfig exists | Who tf using cts and mts? 😭🙏
    : ['.js', '.cjs', '.mjs']; // Exclude .ts files otherwise

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkSync(filePath, fileList); // Recursively collect files from subdirectories 
    } else if (allowedExtensions.includes(path.extname(file))) {
      fileList.push(filePath); // Collect files with the allowed extensions 
    }
  });

  return fileList;
};


