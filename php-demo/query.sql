CREATE DATABASE portfolio;
USE portfolio;

-- Basic info
CREATE TABLE info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    title VARCHAR(100),
    short_description VARCHAR(255),
    description TEXT,
    phone VARCHAR(50),
    email VARCHAR(100),
    linkedin VARCHAR(255),
    github VARCHAR(255),
    profile_image VARCHAR(255),  
    about_image VARCHAR(255)  
);

INSERT INTO info (
    name, 
    title, 
    short_description,
    description, 
    phone, 
    email, 
    linkedin, 
    github,
    profile_image,
    about_image
) VALUES (
    'SANDIP SHAKYA',
    'Full Stack Developer',
    'I am a web developer, proficient in coding and maintaining websites to ensure functionality and responsiveness.',
    'I am a passionate web developer with over a year of hands-on experience in creating dynamic and responsive websites. Based in Patan, Lalitpur, I have honed my skills in various web technologies and frameworks, always striving to deliver clean and efficient code. I hold a Bachelor''s degree in Computer Science and Information Technology (CSIT), which has provided me with a solid foundation in both the theoretical and practical aspects of web development. I am eager to bring my creativity and technical expertise to new and exciting projects.',
    '+977 9843916741',
    'sandipshakya75@gmail.com',
    'https://www.linkedin.com/in/sandip-shakya-8230b91a5/',
    'https://www.github.com/sandipsky',
    'profile.jpg',
    'about.jpg'
);
