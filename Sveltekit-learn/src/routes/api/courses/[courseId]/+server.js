import { courses } from '$lib/courses.js';
import { json } from '@sveltejs/kit';

export function GET(requestEvent) {
    const { params } = requestEvent;
    const { courseId } = params;
    const course = courses.find((course) => course.id === parseInt(courseId));
    return json(course)
}

export async function PATCH(requestEvent) {
    const { params, request } = requestEvent;
    const { courseId } = params;
    const { name, description } = await request.json();
    const course = courses.find((course) => course.id === parseInt(courseId));
    course.name = name;
    course.description = description;
    return json(course);
}

export async function DELETE(requestEvent) {
    const { params } = requestEvent;
    const { courseId } = params;
    const deleteCourse = courses.find((course) => course.id === parseInt(courseId));
    const indexCourse = courses.findIndex((course) => course.id === parseInt(courseId));
    courses.splice(indexCourse, 1);
    return json(deleteCourse)
}
