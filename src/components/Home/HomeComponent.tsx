import React from 'react';
import './style.css'
import Image from 'next/image';
const HomeComponent = () => {
  return (
    <div className="card lg:card-side bg-base-200 shadow-2xl">
      <figure className='px-4 py-4'>
        <img className='rounded-lg' src="https://uznature.uz/uploads/qizkia.jpg" alt="Album"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">O‘zbekiston Qizil kitobi</h2>
        <p>Mamlakatimizda dunyoning aksar davlatlaridan farqli ravishda O‘zbekiston Qizil kitobiga kiritilgan hayvon va o‘simliklar qonunchilik darajasida muhofaza qilinadi. Chunki bizda Qizil kitob noyob turlarni muhofaza qilish bo‘yicha amaliy qo‘llanma bo‘lishi bilan birga huquqiy ahamiyatga ega hujjat hisoblanadi. Ko'pgina mamlakatlarning shunga o'xshash nashrlarida turlarning Qizil kitobga kiritilishi har doim ham uni davlat muhofazasiga olishni anglatmaydi.</p>
        <h4 className='card-title'>
          Qizil kitob haqida yana bir qancha qiziqarli faktlar.
        </h4>
        <ul className='fact'>
          <li>Qizil kitob — noyob va yoʻqolib ketish xavfi ostida turgan yoki yoʻqolib borayotgan hayvonlar, oʻsimliklar yoki zamburugʻlarning izohli roʻyxati.
          </li>
          <li>Qizil kitobni yaratish g'oyasi Xalqaro tabiatni muhofaza qilish ittifoqiga (IUCN) tegishli.</li>
          <li>Qizil kitobda shunday nom bor – qizil rang xavf va xavotirni, bunda o‘simlik va hayvonot olamini anglatadi.</li>
          <li>O‘zbekiston Qizil kitobining birinchi nashri 1984 yilda nashr etilgan.</li>
          <li>O‘zbekiston Qizil kitobining beshinchi nashriga 314 o‘simlik va 206 hayvon turi kiritilgan.</li>
          <li>
          Qizil kitobga antipod sifatida dunyoda Qora kitob mavjud - 1500 yildan keyin qirilib ketgan hayvonlar ro'yxati.
          </li>
        </ul>
        <div className="card-actions justify-end">
          <a
            className='btn btn-primary'
            href="https://drive.usercontent.google.com/u/0/uc?id=19wwTZ6Ubk2zut9xwjG0dMRdSbBZKMJv0&export=download"
            download="19wwTZ6Ubk2zut9xwjG0dMRdSbBZKMJv0"
          >
            Hayvonot dunyosi
            <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,3.41421356 L15,7 L18.5857864,7 L15,3.41421356 Z M19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 L5,3 L5,21 L19,21 L19,9 Z M5,1 L15.4142136,1 L21,6.58578644 L21,21 C21,22.1045695 20.1045695,23 19,23 L5,23 C3.8954305,23 3,22.1045695 3,21 L3,3 C3,1.8954305 3.8954305,1 5,1 Z M11,14.5857864 L11,10 L13,10 L13,14.5857864 L14.2928932,13.2928932 L15.7071068,14.7071068 L12,18.4142136 L8.29289322,14.7071068 L9.70710678,13.2928932 L11,14.5857864 Z"/></svg>
          </a>
          <a
            className='btn btn-primary'
            href="https://drive.usercontent.google.com/u/0/uc?id=1NB7L05Nhj_sfBi16BrXTQZTmkrO9AfnS&export=download"
            download="1NB7L05Nhj_sfBi16BrXTQZTmkrO9AfnS&export"
          >
            O'simlik dunyosi
            <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,3.41421356 L15,7 L18.5857864,7 L15,3.41421356 Z M19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 L5,3 L5,21 L19,21 L19,9 Z M5,1 L15.4142136,1 L21,6.58578644 L21,21 C21,22.1045695 20.1045695,23 19,23 L5,23 C3.8954305,23 3,22.1045695 3,21 L3,3 C3,1.8954305 3.8954305,1 5,1 Z M11,14.5857864 L11,10 L13,10 L13,14.5857864 L14.2928932,13.2928932 L15.7071068,14.7071068 L12,18.4142136 L8.29289322,14.7071068 L9.70710678,13.2928932 L11,14.5857864 Z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;