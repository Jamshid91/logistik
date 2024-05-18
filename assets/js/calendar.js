// calendar
const monthSw = new Swiper('.swiper-month', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1,
        navigation: {
        nextEl: '.swiper-month-next',
        prevEl: '.swiper-month-prev',
      },
  });
  const daySw = new Swiper('.swiper-day', {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 1,
          navigation: {
          nextEl: '.swiper-day-next',
          prevEl: '.swiper-day-prev',
        },
    });
const yearSw = new Swiper('.swiper-year', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1,
        navigation: {
        nextEl: '.swiper-year-next',
        prevEl: '.swiper-year-prev',
      },
  });


// calendar first
  const dayActiv = document.querySelector('.calendar-first .calendar .day'),
        montActiv = document.querySelector('.calendar-first .calendar .month'),
        yearActiv = document.querySelector('.calendar-first .calendar .year'),
        prevBtns = document.querySelectorAll('.calendar-first .calendar-body .prev'),
        nextBtns = document.querySelectorAll('.calendar-first .calendar-body .next'),
        calendarBtn = document.querySelectorAll('.calendar-head');



calendarBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('showCalendar')
    });
})

document.addEventListener('click', (e) => {
    calendarBtn.forEach(btn => {
        btn.parentElement.contains(e.target)||(btn.parentElement.classList.remove('showCalendar'))
    });
});

prevBtns.forEach(prev => {
    prev.addEventListener('click', () => {
        funcCalendar();
    })
})

nextBtns.forEach(next => {
    next.addEventListener('click', () => {
        funcCalendar();
    })
})

function funcCalendar() {
    dayActiv.textContent =  document.querySelector('.calendar-first .swiper-day .swiper-slide-active').textContent;
    montActiv.textContent = document.querySelector('.calendar-first .swiper-month .swiper-slide-active span').dataset.month;
    yearActiv.textContent = document.querySelector('.calendar-first .swiper-year .swiper-slide-active span').dataset.year;
}

// calendar second
const dayActivSec = document.querySelector('.calendar-second .calendar .day'),
montActivSec = document.querySelector('.calendar-second .calendar .month'),
yearActivSec = document.querySelector('.calendar-second .calendar .year'),
prevBtnsSec = document.querySelectorAll('.calendar-second .calendar-body .prev'),
nextBtnsSec = document.querySelectorAll('.calendar-second .calendar-body .next');


prevBtnsSec.forEach(prev => {
prev.addEventListener('click', () => {
funcCalendarSec();
})
})

nextBtnsSec.forEach(next => {
next.addEventListener('click', () => {
funcCalendarSec();
})
})

function funcCalendarSec() {
dayActivSec.textContent =  document.querySelector('.calendar-second .swiper-day .swiper-slide-active').textContent;
montActivSec.textContent = document.querySelector('.calendar-second .swiper-month .swiper-slide-active span').dataset.month;
yearActivSec.textContent = document.querySelector('.calendar-second .swiper-year .swiper-slide-active span').dataset.year;
}

// calendar third
const dayActivTh = document.querySelector('.calendar-third .calendar .day'),
montActivTh = document.querySelector('.calendar-third .calendar .month'),
yearActivTh = document.querySelector('.calendar-third .calendar .year'),
prevBtnsTh = document.querySelectorAll('.calendar-third .calendar-body .prev'),
nextBtnsTh = document.querySelectorAll('.calendar-third .calendar-body .next');


prevBtnsTh.forEach(prev => {
prev.addEventListener('click', () => {
funcCalendarTh();
})
})

nextBtnsTh.forEach(next => {
next.addEventListener('click', () => {
funcCalendarTh();
})
})

function funcCalendarTh() {
dayActivTh.textContent =  document.querySelector('.calendar-third .swiper-day .swiper-slide-active').textContent;
montActivTh.textContent = document.querySelector('.calendar-third .swiper-month .swiper-slide-active span').dataset.month;
yearActivTh.textContent = document.querySelector('.calendar-third .swiper-year .swiper-slide-active span').dataset.year;
}