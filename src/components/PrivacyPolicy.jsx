export default function PrivacyPolicy() {
  return (
    <div className='px-6 basis-full md:basis-4/5 font-[Montserrat] text-blue-800'>
      <header>
        <h1 className='mb-6 text-2xl'>Política de Privacidad y Permisos de PetLoveTest</h1>
      </header>

      <section className='mb-4'>
          <p><strong>PetLoveTest</strong> valora tu privacidad y la de tu mascota. Para brindarte una experiencia óptima en nuestra aplicación, necesitamos acceder a ciertos permisos de tu dispositivo. A continuación, te explicamos cómo utilizamos los datos que nos proporcionas y por qué solicitamos estos permisos.</p>
      </section>

      <section className='mb-4'>
          <h2 className='mb-2 text-lg font-medium'>¿Qué permisos necesitamos?</h2>
          <ol>
              <li><strong>Acceso a la Cámara:</strong> Para que puedas tomar una foto de tu mascota y usarla como foto de perfil o foto destacada en tu perfil de <strong>PetLoveTest</strong>, solicitamos acceso a la cámara de tu dispositivo. De esta forma, podrás capturar nuevas imágenes de tu mascota de forma sencilla y directa desde la app.</li>
              <li><strong>Acceso a Imágenes:</strong> Además de la cámara, también necesitamos permiso para acceder a las imágenes almacenadas en tu dispositivo. Esto es necesario para que puedas seleccionar una foto que ya hayas tomado previamente y utilizarla como foto de perfil o imagen destacada de tu mascota en nuestra comunidad.</li>
          </ol>
      </section>

      <section className='mb-4'>
          <h2 className='mb-2 text-lg font-medium'>¿Por qué solicitamos estos permisos?</h2>
          <ul>
              <li><strong>Foto de Perfil de tu Mascota:</strong> Queremos que tu mascota se vea genial en su perfil. La foto que subas será la primera impresión que otros usuarios tendrán de ella en nuestra comunidad.</li>
              <li><strong>Foto Destacada:</strong> La foto destacada de tu mascota será visible en la lista de mascotas de otros usuarios, y en caso de que haya un <strong>match</strong> entre dos mascotas, esta imagen ayudará a mostrar lo mejor de tu compañero/a.</li>
              <li><strong>Interacción en la Comunidad:</strong> Las fotos de perfil y destacadas ayudan a mejorar la interacción entre usuarios, permitiendo que puedas ver y dar like a otras mascotas, y si se da un <strong>match</strong>, conectar a través del chat.</li>
          </ul>
      </section>

      <section className='mb-4'>
          <h2 className='mb-2 text-lg font-medium'>¿Qué hacemos con las fotos que subes?</h2>
          <p>Las fotos que tomes o selecciones se almacenan en nuestros servidores de manera segura y únicamente se utilizan para mostrar el perfil de tu mascota dentro de la aplicación. No compartimos estas imágenes con terceros sin tu consentimiento expreso. Solo serán visibles para otros usuarios de <strong>PetLoveTest</strong> dentro de la aplicación.</p>
      </section>

      <section className='mb-4'>
          <h2 className='mb-2 text-lg font-medium'>Tu privacidad es importante para nosotros:</h2>
          <ul>
              <li><strong>Acceso controlado:</strong> Solo tendrás acceso a las fotos que tú subas o tomes. Las imágenes no se utilizarán con fines comerciales ni serán compartidas fuera de la comunidad de <strong>PetLoveTest</strong>.</li>
              <li><strong>Borrado de datos:</strong> Tienes la opción de eliminar cualquier foto o perfil en cualquier momento a través de la configuración de tu cuenta en la app.</li>
              <li><strong>Seguridad:</strong> Implementamos medidas de seguridad para proteger las fotos e información de tu mascota.</li>
          </ul>
      </section>

      <section className='mb-4'>
          <p>Si tienes alguna duda sobre cómo manejamos tus datos o si prefieres no dar acceso a la cámara o a las imágenes, podrás seguir utilizando la aplicación sin estos permisos, aunque algunas funcionalidades como la personalización del perfil de tu mascota estarán limitadas.</p>
          <p>Al continuar utilizando la aplicación, das tu consentimiento para el uso de estos permisos conforme a esta política de privacidad.</p>
      </section>
    </div>
  )
}