export default function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Política de Privacidad — Staz</h1>
      <p style={styles.meta}>Última actualización: 08 de diciembre de 2025</p>

      <h2 style={styles.heading}>1. Introducción</h2>
      <p style={styles.paragraph}>
        Staz es una aplicación para crear y programar actividades para el propio usuario
        o para contactos del usuario de la aplicación. Esta política explica qué datos recogemos, por qué los recogemos,
        cómo los usamos y los derechos que tiene el usuario.
      </p>

      <h2 style={styles.heading}>2. Responsable</h2>
      <p style={styles.paragraph}>
        Responsable: <strong>Abi Mendlewicz</strong><br/>
        Correo de contacto: <strong>abi_men@yahoo.com</strong>
      </p>

      <h2 style={styles.heading}>3. Datos que recopilamos</h2>
      <ul>
        <li style={styles.paragraph}><strong>Contactos del dispositivo:</strong> Para permitirte programar actividades dirigidas a personas que ya están en tu agenda de contactos, Staz te solicita permiso para acceder a los contactos de tu dispositivo. Solo accedemos a la información de contacto que tu le autorices específicamente en la aplicación y no se recoge ni se almacena ningún tipo de información sobre tus contactos.</li>
        <li style={styles.paragraph}><strong>Registro e inicio de sesión:</strong> Para usar Staz es necesario registrarse con correo electrónico y contraseña, o iniciar sesión con Google. Además de tu correo electrónico y tu nombre solicitamos tu número de teléfono como datos obligatorios de registro.</li>
        <li style={styles.paragraph}><strong>Contenido de la aplicación:</strong> Datos sobre las actividades que generes tú o aquellos contactos a los que invitaste o que hayas aceptado su invitación para compartir actividades.</li>
        <li style={styles.paragraph}><strong>Almacenamiento:</strong> Todos los textos asociados a las actividades se cifran de extremo a extremo antes de su almacenamiento, de modo que los contenidos legibles sólo pueden ser descifrados por usuarios autorizados del lado del cliente.</li>
        <li style={styles.paragraph}><strong>Datos técnicos:</strong> Identificadores generados por el sistema, información del dispositivo y datos de uso anónimos para diagnóstico y mejora.</li>
      </ul>

      <h2 style={styles.heading}>4. Finalidad del tratamiento</h2>
      <p style={styles.paragraph}>Usamos los datos sólo para permitirte crear, editar, guardar y llevar registro de las actividades, permitir seleccionar destinatarios desde la agenda de contactos cuando así lo solicites.</p>

      <h2 style={styles.heading}>5. Base legal</h2>
      <p style={styles.paragraph}>Cuando corresponda, la base legal para el tratamiento de datos es el consentimiento del usuario (por ejemplo, al otorgar permiso de acceso a contactos) y la ejecución de un contrato/servicio solicitado por el usuario (por ejemplo, el almacenamiento y gestión de sus actividades cuando utiliza la aplicación).</p>

      <h2 style={styles.heading}>6. Uso del permiso de Contactos</h2>
      <p style={styles.paragraph}>Staz solicita acceso a la lista de contactos del dispositivo únicamente para que el usuario pueda elegir destinatarios de las actividades desde su propia agenda. No compartimos la lista de contactos con terceros ni la usamos con fines publicitarios. El acceso a los contactos se solicita en tiempo de ejecución y el usuario puede revocar el permiso desde la configuración del dispositivo en cualquier momento.</p>

      <h2 style={styles.heading}>7. Compartición con terceros</h2>
      <p style={styles.paragraph}>Los datos se almacenan en servicios de terceros necesarios para el funcionamiento de la aplicación, principalmente Firebase (Authentication y Firestore). Si en algún momento compartimos datos con otros proveedores se informará de forma transparente. No vendemos datos personales a terceros.</p>
      <p style={styles.paragraph}><em>Nota sobre cifrado:</em> aunque los datos se alojan en Firestore, los textos cifrados de las actividades no son legibles por terceros ni por el propio servicio de alojamiento, ya que se almacenan cifrados. Sólo los usuarios con las claves correspondientes pueden descifrar esos contenidos en sus dispositivos.</p>

      <h2 style={styles.heading}>8. Conservación de datos</h2>
      <p style={styles.paragraph}>Mantendremos los datos personales del usuario mientras la cuenta exista o durante el tiempo necesario para cumplir con las finalidades descritas (por ejemplo, conservar las actividades creadas). Los usuarios pueden solicitar la eliminación de su cuenta y datos.</p>

      <h2 style={styles.heading}>9. Seguridad</h2>
      <p style={styles.paragraph}>Adoptamos medidas técnicas y organizativas razonables para proteger los datos contra el acceso no autorizado, la divulgación y la pérdida. En particular, los textos de las actividades se cifran en el cliente (extremo a extremo) antes de ser enviados a la base de datos. Las claves de cifrado se gestionan en el lado del cliente/usuario, de forma que el proveedor de almacenamiento no puede leer los contenidos cifrados. Otros datos de usuario (por ejemplo correo, nombre y número de teléfono usados para autenticación y registro) se almacenan sin cifrado E2EE, ya que son necesarios para la autenticación y funcionamiento del servicio.</p>

      <h2 style={styles.heading}>10. Derechos del usuario</h2>
      <p style={styles.paragraph}>Los usuarios tienen derecho a acceder, rectificar, suprimir o portar sus datos, así como a solicitar la limitación del tratamiento u oponerse cuando proceda. Para ejercer estos derechos, por favor contacta a: <strong>abi_men@yahoo.com</strong>.</p>

      <h2 style={styles.heading}>11. Datos de menores</h2>
      <p style={styles.paragraph}>Staz no está dirigida a menores de edad. Si tienes conocimiento de que un menor ha proporcionado datos personales sin el consentimiento de sus tutores, contáctanos para proceder a su eliminación.</p>

      <h2 style={styles.heading}>12. Cambios en la política</h2>
      <p style={styles.paragraph}>Podemos actualizar esta política de privacidad. Publicaremos la fecha de la última actualización arriba y, cuando los cambios sean significativos, notificaremos a los usuarios mediante la aplicación o correo electrónico.</p>

      <h2 style={styles.heading}>13. Contacto</h2>
      <p style={styles.paragraph}>Si tienes preguntas o quieres ejercer tus derechos, escríbenos a: <strong>abi_men@yahoo.com</strong>.</p>

      <footer style={styles.footer}>Aplicación: <strong>Staz</strong></footer>
    </div>
  )
}

const styles = {
  container: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial', lineHeight: 1.6, color: '#111', padding: 32, maxWidth: 900, margin: 'auto' },
  title: { color: '#0b4a6f' },
  meta: { color: '#666' },
  heading: { color: '#0b4a6f' },
  paragraph: { marginBottom: 12 },
  footer: { marginTop: 40, color: '#555' }
}
