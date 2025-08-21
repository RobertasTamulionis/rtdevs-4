import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './bg-lines.scss';

function BgLines() {
  const linesRef1 = useRef(null);
  const linesRef2 = useRef(null);
  const linesRef3 = useRef(null);

  useEffect(() => {
      gsap.to(linesRef1.current, {
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'Linear.easeNone',
        morphSVG: {
          shape:
            'M6822.781-522.782s192.872,86.885,341.174-50.859,201.562-188.886,437.422-90.586,337.837-51.732,337.837-51.732',
        },
      });

      gsap.to(linesRef2.current, {
        duration: 40,
        repeat: -1,
        yoyo: true,
        ease: 'Linear.easeNone',
        morphSVG: {
          shape:
            'M-16.354-81.71S110.806,139.112,313.2.167,692.5-46.459,838.26,121.979s293.583,96.488,293.583,96.488',
        },
      });

      gsap.to(linesRef3.current, {
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: 'Linear.easeNone',
        morphSVG: {
          shape:
            'M46.821,87.68S241.685-85.668,412.59,46.95s465.77,54.779,540.227-54.108,199.766,25.09,199.766,25.09',
        },
      });
    }, []);
  return (
    <div className='bg-lines'>
      <svg xmlns="http://www.w3.org/2000/svg" width="274.664" height="1127.106" viewBox="0 0 274.664 1127.106">
        <g  
          id="Group_181" 
          data-name="Group 181" 
          transform="translate(-844.213 24.867)">
            <path 
              ref={linesRef1}
              id="Path_1433" 
              data-name="Path 1433" 
              d="M6822.781-522.782s86.788-203,282.653-199.283,277.229,143.292,501.248,143.292,332.532-137.186,332.532-137.186" 
              transform="translate(1611.737 7914.738) rotate(-90)" 
              fill="none" 
              stroke="#f2b99d" 
              strokeWidth="1"
            />
            <path 
              ref={linesRef2}
              id="Path_1434" 
              data-name="Path 1434" d="M12.251,44.414s200.412-137.63,410-28.471S678.693,193.957,838.26,121.979s288.981,10.157,288.981,10.157" transform="matrix(-0.087, -0.996, 0.996, -0.087, 968.776, 1112)" fill="none" stroke="#f2b99d" strokeWidth="0.5"/>
          <path ref={linesRef3} id="Path_1434-2" data-name="Path 1434" d="M46.821,87.68s173.037,110.4,371.428,35.578,260.443-169.6,420.01-97.623,314.323-7.7,314.323-7.7" transform="matrix(-0.087, 0.996, -0.996, -0.087, 1110.828, -48.036)" fill="none" stroke="#f2b99d" strokeWidth="0.5"/>
        </g>
      </svg>
    </div>
  )
}

export default BgLines;


<svg xmlns="http://www.w3.org/2000/svg" width="414.733" height="1171.68" viewBox="0 0 414.733 1171.68">
  <g id="Group_181" data-name="Group 181" transform="translate(-788.596 36.04)">
    <path id="Path_1433" data-name="Path 1433" d="M6822.781-522.782s192.872,86.885,341.174-50.859,201.562-188.886,437.422-90.586,337.837-51.732,337.837-51.732" transform="translate(1611.737 7914.738) rotate(-90)" fill="none" stroke="#f2b99d" stroke-width="1"/>
    <path id="Path_1434" data-name="Path 1434" d="M-16.354-81.71S110.806,139.112,313.2.167,692.5-46.459,838.26,121.979s293.583,96.488,293.583,96.488" transform="matrix(-0.087, -0.996, 0.996, -0.087, 968.776, 1112)" fill="none" stroke="#f2b99d" stroke-width="0.5"/>
    <path id="Path_1434-2" data-name="Path 1434" d="M46.821,87.68S241.685-85.668,412.59,46.95s465.77,54.779,540.227-54.108,199.766,25.09,199.766,25.09" transform="matrix(-0.087, 0.996, -0.996, -0.087, 1110.828, -48.036)" fill="none" stroke="#f2b99d" stroke-width="0.5"/>
  </g>
</svg>