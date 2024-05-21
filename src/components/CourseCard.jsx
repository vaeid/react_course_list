import React from 'react';

export default function CourseCard({ course }) {
  return (
    <div className='course-item'>
      <div className='course-item__img'>
        <img src={course.imageUrl} alt='img1.jpg' />
      </div>
      <div className='course-item__detail'>
        <CourseCardBody course={course} />
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
            <span className='badge badge--primary'>{course.status}</span>
          </div>
        </div>
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
