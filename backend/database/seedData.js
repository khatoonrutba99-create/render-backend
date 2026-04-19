import { User } from "../models/userSchema.js";
import cloudinary from "cloudinary";

export const seedDoctors = async () => {
    try {
        const count = await User.countDocuments({ role: "Doctor" });
        if (count > 0) return; // Already seeded

        const doctors = [
            {
                firstName: "Aman",
                lastName: "Gupta",
                email: "aman.gupta@example.com",
                phone: "9876543210",
                password: "password123",
                gender: "Male",
                dob: new Date("1980-05-15"),
                nic: "123456789012",
                role: "Doctor",
                doctorDepartment: "Cardiology",
                docAvatar: { public_id: "placeholder", url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            },
            {
                firstName: "Priya",
                lastName: "Sharma",
                email: "priya.sharma@example.com",
                phone: "9876543211",
                password: "password123",
                gender: "Female",
                dob: new Date("1985-08-22"),
                nic: "123456789013",
                role: "Doctor",
                doctorDepartment: "Neurology",
                docAvatar: { public_id: "placeholder", url: "https://images.unsplash.com/photo-1594824432258-0ceb517bd448?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            },
            {
                firstName: "Vikram",
                lastName: "Singh",
                email: "vikram.singh@example.com",
                phone: "9876543212",
                password: "password123",
                gender: "Male",
                dob: new Date("1978-11-10"),
                nic: "123456789014",
                role: "Doctor",
                doctorDepartment: "Orthopaedics",
                docAvatar: { public_id: "placeholder", url: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            },
            {
                firstName: "Neha",
                lastName: "Verma",
                email: "neha.verma@example.com",
                phone: "9876543213",
                password: "password123",
                gender: "Female",
                dob: new Date("1990-02-14"),
                nic: "123456789015",
                role: "Doctor",
                doctorDepartment: "Pediatrics",
                docAvatar: { public_id: "placeholder", url: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefa22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            },
            {
                firstName: "Arjun",
                lastName: "Patel",
                email: "arjun.patel@example.com",
                phone: "9876543214",
                password: "password123",
                gender: "Male",
                dob: new Date("1982-07-30"),
                nic: "123456789016",
                role: "Doctor",
                doctorDepartment: "ENT",
                docAvatar: { public_id: "placeholder", url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            },
            {
                firstName: "Sneha",
                lastName: "Reddy",
                email: "sneha.reddy@example.com",
                phone: "9876543215",
                password: "password123",
                gender: "Female",
                dob: new Date("1988-03-25"),
                nic: "123456789017",
                role: "Doctor",
                doctorDepartment: "Dermatology",
                docAvatar: { public_id: "placeholder", url: "https://images.unsplash.com/photo-1594824432258-0ceb517bd448?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            },
            {
                firstName: "Rohan",
                lastName: "Mehta",
                email: "rohan.mehta@example.com",
                phone: "9876543216",
                password: "password123",
                gender: "Male",
                dob: new Date("1975-09-12"),
                nic: "123456789018",
                role: "Doctor",
                doctorDepartment: "Oncology",
                docAvatar: { public_id: "placeholder", url: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            },
            {
                firstName: "Kavya",
                lastName: "Iyer",
                email: "kavya.iyer@example.com",
                phone: "9876543217",
                password: "password123",
                gender: "Female",
                dob: new Date("1992-11-05"),
                nic: "123456789019",
                role: "Doctor",
                doctorDepartment: "Gastroenterology",
                docAvatar: { public_id: "placeholder", url: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefa22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            },
            {
                firstName: "Siddharth",
                lastName: "Joshi",
                email: "siddharth.joshi@example.com",
                phone: "9876543218",
                password: "password123",
                gender: "Male",
                dob: new Date("1983-06-18"),
                nic: "123456789020",
                role: "Doctor",
                doctorDepartment: "Radiology",
                docAvatar: { public_id: "placeholder", url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            },
            {
                firstName: "Anjali",
                lastName: "Desai",
                email: "anjali.desai@example.com",
                phone: "9876543219",
                password: "password123",
                gender: "Female",
                dob: new Date("1987-12-09"),
                nic: "123456789021",
                role: "Doctor",
                doctorDepartment: "Physical Therapy",
                docAvatar: { public_id: "placeholder", url: "https://images.unsplash.com/photo-1594824432258-0ceb517bd448?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
            }
        ];

        for (const doctor of doctors) {
            await User.create(doctor);
        }
        console.log("Seeded default doctors successfully.");
    } catch (error) {
        console.log("Error seeding doctors:", error);
    }
};
