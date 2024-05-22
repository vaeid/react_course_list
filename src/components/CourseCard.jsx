import React from 'react';

export default function CourseCard({ course }) {
  return (
    <div className='course-item'>
      <div className='course-item__img'>
        <img src={course.imageUrl} alt='img1.jpg' />
      </div>
      <div className='course-item__detail'>
        <CourseCardBody course={course} />
        <CourseCardFooter course={course} />
      </div>
    </div>
  );
}
function CourseCardFooter({ course }) {
  return (
    <div className='course-item__footer'>
      <div className='tags'>
        {course.tags.map((tag) => (
          <span key={tag} className='badge badge--secondary'>
            {tag}
          </span>
        ))}
      </div>
      <div className='caption'>
        <div className='date'>{new Date(course.start).toLocaleDateString('fa-IR')}</div>
        <span
          className={`badge badge--${
            course.status === 'Active' ? 'primary' : course.status === 'Completed' ? 'secondary' : 'danger'
          }`}
        >
          {course.status}
        </span>
      </div>
    </div>
  );
}
function CourseCardBody({ course }) {
  return (
    <div className='course-item__body'>
      <div>
        <p className='title'>{course.title}</p>
        <p className='desc'>{course.description}</p>
      </div>
      <span className='rate'> ⭐️ {course.rate}</span>
    </div>
  );
}
