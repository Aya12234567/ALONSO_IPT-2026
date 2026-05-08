const config = {
    database: {
        get host() { return process.env.DB_HOST || 'localhost'; },
        get port() { return Number(process.env.DB_PORT) || 3306; },
        get user() { return process.env.DB_USER || 'root'; },
        get password() { return process.env.DB_PASSWORD || ''; },
        get database() { return process.env.DB_NAME || 'node_mysql_api'; }
    },
    get secret() { return process.env.JWT_SECRET || ''; },
    get emailFrom() { return process.env.EMAIL_FROM || 'karlee.lind@ethereal.email'; },
    smtpOptions: {
        get host() { return process.env.SMTP_HOST || 'smtp.ethereal.email'; },
        port: 587,
        auth: {
            get user() { return process.env.SMTP_USER || 'karlee.lind@ethereal.email'; },
            get pass() { return process.env.SMTP_PASS || ''; }
        }
    }
};

export default config;