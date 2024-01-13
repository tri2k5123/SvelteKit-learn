import { courses } from '$lib/courses.js';
import { json } from '@sveltejs/kit';


// get theo api tu db ben ngoai
// export async function GET() {
//     const response = await fetch("http://localhost:4000/courses");
//     const courses = await response.json();
//     return json(courses)
// }

export async function POST(requestEvent) {
    const { request } = requestEvent;
    const { name, description } = await request.json();
    const newCourse = {
        id: courses.length + 1,
        name,
        description
    }
    courses.push(newCourse);
    return json(newCourse, { status: 201 });
}

// cách thông thường
// export function GET() {
//     return new Response(JSON.stringify(courses), {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }
// cách viết ngắn gọn
export function GET() {
    return json(courses)
}
