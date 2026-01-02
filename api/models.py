from django.db import models

class Proyecto(models.Model):
    # AQUÍ ESTÁN LAS 4 PUNTAS DE TU X
    SECCION_CHOICES = [
        ('PERFIL', 'Top Left - Sobre Mí (Perfil)'),          # Punta 1: Tu foto, bio, resumen
        ('EXPERIENCIA', 'Top Right - Proyectos Reales'),     # Punta 2: Trabajos pasados (Scroll Vertical)
        ('CONTACTO', 'Bottom Left - Datos de Contacto'),     # Punta 3: Email, LinkedIn, etc.
        ('SHOWCASE', 'Bottom Right - Lo que puedo hacer'),   # Punta 4: Demos (Netflix, Tienda, IA)
    ]

    # ESTILOS VISUALES (Solo útil para la sección SHOWCASE)
    TIPO_DEMO_CHOICES = [
        ('NINGUNO', 'Estándar (Texto/Imagen)'),
        ('NETFLIX', 'Vista estilo Netflix'),
        ('ECOMMERCE', 'Vista estilo Tienda'),
        ('IA_RETINA', 'Vista estilo IA/Seguridad'),
    ]

    titulo = models.CharField(max_length=100) # Ej: "Mi Biografía" o "Clon de Netflix"
    descripcion = models.TextField(blank=True) # Resumen o Bio
    
    seccion = models.CharField(max_length=20, choices=SECCION_CHOICES)
    tipo_demo = models.CharField(max_length=20, choices=TIPO_DEMO_CHOICES, default='NINGUNO')
    
    # Multimedia
    imagen = models.ImageField(upload_to='proyectos/', blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)
    link_externo = models.URLField(blank=True, null=True) # Para GitHub o LinkedIn
    
    orden = models.IntegerField(default=0) # Para que puedas ordenar qué sale primero
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"[{self.get_seccion_display()}] {self.titulo}"