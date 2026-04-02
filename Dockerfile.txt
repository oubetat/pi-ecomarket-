# استخدم صورة Node.js الرسمية
FROM node:18

# أنشئ مجلد العمل
WORKDIR /app

# انسخ ملفات package.json و package-lock.json
COPY package*.json ./

# ثبّت الحزم
RUN npm install

# انسخ باقي الملفات
COPY . .

# افتح المنفذ
EXPOSE 5000

# أمر التشغيل
CMD ["npm", "start"]