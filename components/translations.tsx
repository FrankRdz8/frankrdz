export const translations = {
    es: {
        hero: {
            subtitle: "Full Stack Engineer",
            desc: "Construyo soluciones empresariales y experiencias digitales premium, eligiendo en cada proyecto la tecnología que mejor resuelve el problema. Enfocado en la optimización de rendimiento, arquitecturas escalables y soluciones del mundo real.",
            btnProjects: "Proyectos",
            btnContact: "Contacto",
            scroll: "Scroll para explorar",
        },
        metropolis: {
            tag: "Full-Stack",
            subtitle: "Sistema de gestión integral para empresas de servicios: centraliza facturación, personal, clientes, reclamos y reportes en un solo lugar, para dejar atrás las planillas sueltas y el trabajo manual repetitivo.",
            architecture: "Estabilidad y Confiabilidad",
            archDesc: "Un sistema pensado para crecer junto a tu negocio: seguro, estable, y con mejoras constantes que no interrumpen la operación diaria. Cada cambio se prueba a fondo antes de llegar a producción, para que la empresa se enfoque en su trabajo y no en si el sistema va a fallar.",
            stackTag: "Tecnología aplicada",
            preview: "[ Vista Previa del Dashboard de Administración ]",
            stats: [
                { value: "4", label: "Roles de acceso — cada uno ve solo lo suyo" },
                { value: "24/7", label: "Respaldo automático de la información" },
                { value: "Segundos", label: "para facturar en masa lo que antes tardaba días" },
                { value: "0", label: "Planillas en papel o Excels sueltos" },
            ],
            modules: [
                {
                    number: "01",
                    title: "Facturación en Segundos",
                    desc: "Generá y emití comprobantes con un par de clics, con reportes en PDF listos para enviar. Se terminó armar facturas a mano o perseguir papeles a fin de mes. Factura electrónica válida ante ARCA con CAE automático, sin trámites aparte.",
                    image: "/screenshots/metropolis-facturacion.png",
                    imageAlt: "Listado de facturas emitidas en Metropolis"
                },
                {
                    number: "02",
                    title: "Asistencia con Ubicación Verificada",
                    desc: "Control total de quién trabajó, dónde y cuándo, sin planillas en papel ni controles manuales — el sistema registra la jornada de cada empleado automáticamente.",
                    image: "/screenshots/metropolis-asistencia.png",
                    imageAlt: "Registro de asistencia con ubicación verificada en Metropolis"
                },
                {
                    number: "03",
                    title: "Reportes al Instante",
                    desc: "Estadísticas y números del negocio actualizados en tiempo real, sin exportar a Excel ni armar tablas a mano para tomar una decisión.",
                    image: "/screenshots/metropolis-dashboard.png",
                    imageAlt: "Dashboard de administrador con estadísticas en Metropolis"
                }
            ],
            mentionedTag: "Y también incluye",
            mentionedModules: [
                {
                    title: "Clientes y Accesos por Rol",
                    desc: "cada uno ve solo lo suyo"
                },
                {
                    title: "Verificación en Dos Pasos",
                    desc: "seguridad extra para cuentas sensibles"
                },
                {
                    title: "Cambios de Turno sin Dolores de Cabeza",
                    desc: "todo se actualiza solo"
                },
                {
                    title: "Copias de Seguridad Automáticas",
                    desc: "tu información, respaldada todos los días"
                },
                {
                    title: "Mejora Continua",
                    desc: "menos fallas, más tranquilidad"
                },
                {
                    title: "Gestión de Reclamos con Administraciones",
                    desc: "seguimiento hasta resolverlos, sin planillas ni mails sueltos"
                }
            ],
            visit: "Visitar Sitio",
        },
        soles: {
            tag: "Full-Stack",
            subtitle: "Sistema de gestión interna para una ONG: usuarios y voluntarios, asistencia, capacitación con evaluaciones y rendición de cuentas pública, todo en un solo lugar — construido y mantenido de forma continua junto al equipo de la organización.",
            architecture: "Seguridad como Prioridad",
            archDesc: "CSRF en cada formulario, permisos verificados siempre del lado del servidor (nunca solo ocultando un botón), contraseñas y códigos de verificación jamás guardados en texto plano, y un log de accesos con IP para auditar cualquier intento de ingreso. Revisado sistemáticamente contra las 9 categorías aplicables del OWASP Top 10.",
            stackTag: "Tecnología aplicada",
            stats: [
                { value: "150+", label: "Voluntarios y usuarios gestionados" },
                { value: "24/7", label: "Disponibilidad, sin depender de que alguien esté conectado" },
                { value: "100%", label: "De los datos de voluntarios y donantes bajo resguardo" },
                { value: "Tranquilidad", label: "El equipo no tiene que preocuparse por la seguridad" },
            ],
            modules: [
                {
                    number: "01",
                    title: "Usuarios, Roles y Voluntarios",
                    desc: "Perfiles con foto, cambio de email con verificación por código y de usuario con chequeo de disponibilidad en vivo — cada rol (Administrador, Referente, Voluntario) ve solo lo que le corresponde.",
                    image: "/screenshots/soles-usuarios.png",
                    imageAlt: "Listado de usuarios y voluntarios en la intranet de Soles"
                },
                {
                    number: "02",
                    title: "Asistencia Automatizada",
                    desc: "Marcado de entrada y salida, con generación automática de faltas injustificadas para los turnos vencidos sin marcar — sin planillas ni controles manuales.",
                    image: "/screenshots/soles-asistencia.png",
                    imageAlt: "Panel de control de asistencia en la intranet de Soles"
                },
                {
                    number: "03",
                    title: "Capacitación con Evaluaciones",
                    desc: "Cursos con materiales y quizzes autocorregidos (multiple choice y verdadero/falso), con ranking de resultados para seguir el progreso de cada voluntario.",
                    image: "/screenshots/soles-capacitacion.png",
                    imageAlt: "Quiz de capacitación con resultados en la intranet de Soles"
                }
            ],
            mentionedTag: "Y también incluye",
            mentionedModules: [
                { title: "Transparencia Pública", desc: "balances y documentos institucionales" },
                { title: "Log de Accesos", desc: "auditoría de intentos de login con IP" },
                { title: "Mails con Diseño de Marca", desc: "invitaciones, recuperación y avisos" },
            ],
            visit: "Visitar Sitio",
        },
        almaq: {
            tag: "Frontend",
            subtitle: "Construcción completa desde cero de una plataforma web responsive para una empresa constructora líder, con galería de obras con álbum de fotos propio para cada proyecto y foco extremo en diseño minimalista y rendimiento.",
            stackTag: "Tecnología aplicada",
            modules: [
                {
                    number: "01",
                    title: "Landing Corporativa",
                    desc: "Diseño minimalista, carga asíncrona de recursos y optimización estructural para motores de búsqueda — rendimiento y SEO optimizados al 100%.",
                    image: "/screenshots/almaq.png",
                    imageAlt: "Sitio web de Almaq Construcción"
                },
                {
                    number: "02",
                    title: "Galería de Proyectos",
                    desc: "Carrusel con las obras de la constructora — cada una con imagen, título y estado de avance (en curso o completada). Cada obra tiene su propia página con un álbum de fotos, para que sus clientes vean el trabajo real, obra por obra, sin tener que pedir referencias.",
                    image: "/screenshots/almaq-proyectos.png",
                    imageAlt: "Galería de proyectos de Almaq Construcción"
                },
                {
                    number: "03",
                    title: "Presupuestos desde la Web",
                    desc: "Formulario de contacto para que un cliente potencial pida un presupuesto en el momento, sin llamar ni escribir por redes — la consulta llega directo a la empresa.",
                    image: "/screenshots/almaq-contacto.png",
                    imageAlt: "Formulario de contacto y cotización de Almaq Construcción"
                }
            ],
            visit: "Visitar Sitio",
        },
        cruzSacrificio: {
            tag: "Frontend",
            subtitle: "Renovación de la estética visual del sitio institucional, con rediseño de componentes críticos de navegación y mejoras en SEO y rendimiento.",
            stackTag: "Tecnología aplicada",
            modules: [
                {
                    number: "01",
                    title: "Renovación Visual y Rendimiento",
                    desc: "Reestructuración de la arquitectura de estilos SASS/SCSS heredada, con mejora en tiempos de carga, jerarquía visual y posicionamiento en buscadores.",
                    image: "/screenshots/cruzsacrificio.png",
                    imageAlt: "Sitio web del Instituto Cruz del Sacrificio"
                }
            ],
            visit: "Visitar Sitio",
        },
        contact: {
            tag: "Contacto",
            title: "Ingeniería de software e infraestructura.",
            desc: "Disponible para discutir soluciones tecnológicas complejas, arquitecturas full-stack o vacantes de desarrollo.",
            location: "Córdoba, Argentina",
            btnMessage: "Enviar un mensaje",
        }
    },
    en: {
        hero: {
            subtitle: "Full Stack Engineer",
            desc: "I build enterprise solutions and premium digital experiences, choosing whatever technology best fits each project. Focused on performance optimization, scalable architectures, and real-world solutions.",
            btnProjects: "Projects",
            btnContact: "Contact",
            scroll: "Scroll to explore",
        },
        metropolis: {
            tag: "Full-Stack",
            subtitle: "A complete management system for service companies: invoicing, staff, clients, claims, and reports centralized in one place — leaving scattered spreadsheets and repetitive manual work behind.",
            architecture: "Reliability & Stability",
            archDesc: "Built to grow alongside your business: secure, stable, and continuously improved without ever interrupting day-to-day operations. Every change is thoroughly tested before reaching production, so the business can focus on its work instead of worrying whether the system will hold up.",
            stackTag: "Technology Used",
            preview: "[ Administration Dashboard Preview ]",
            stats: [
                { value: "4", label: "Access roles — everyone sees only what they need" },
                { value: "24/7", label: "Automatic backup of your data" },
                { value: "Seconds", label: "to mass-invoice what used to take days" },
                { value: "0", label: "Paper checklists or scattered spreadsheets" },
            ],
            modules: [
                {
                    number: "01",
                    title: "Invoicing in Seconds",
                    desc: "Generate and issue invoices in a couple of clicks, with ready-to-send PDF reports. No more building invoices by hand or chasing paperwork at month-end. Valid electronic invoicing with Argentina's tax authority (ARCA), with automatic government authorization — no extra paperwork.",
                    image: "/screenshots/metropolis-facturacion.png",
                    imageAlt: "List of issued invoices in Metropolis"
                },
                {
                    number: "02",
                    title: "Attendance with Verified Location",
                    desc: "Know who worked, where, and when — no paper logs or manual checks. The system logs every employee's shift automatically.",
                    image: "/screenshots/metropolis-asistencia.png",
                    imageAlt: "Attendance record with verified location in Metropolis"
                },
                {
                    number: "03",
                    title: "Instant Reports",
                    desc: "Business stats and numbers updated in real time, without exporting to Excel or building a table by hand to make a decision.",
                    image: "/screenshots/metropolis-dashboard.png",
                    imageAlt: "Administrator dashboard with statistics in Metropolis"
                }
            ],
            mentionedTag: "Also included",
            mentionedModules: [
                {
                    title: "Clients & Role-Based Access",
                    desc: "everyone sees only what's theirs"
                },
                {
                    title: "Two-Step Verification",
                    desc: "extra security for sensitive accounts"
                },
                {
                    title: "Shift Swaps Without the Headache",
                    desc: "everything updates itself"
                },
                {
                    title: "Automatic Backups",
                    desc: "your data, backed up every day"
                },
                {
                    title: "Continuous Improvement",
                    desc: "fewer failures, more peace of mind"
                },
                {
                    title: "Claims Management with Property Managers",
                    desc: "tracked through to resolution, no spreadsheets or scattered emails"
                }
            ],
            visit: "Visit Site",
        },
        soles: {
            tag: "Full-Stack",
            subtitle: "Internal management system for a nonprofit: users and volunteers, attendance, training with quizzes, and public accountability reporting, all in one place — built and continuously maintained alongside the organization's team.",
            architecture: "Security as a Priority",
            archDesc: "CSRF on every form, permissions always verified server-side (never just hiding a button), passwords and verification codes never stored in plain text, and an access log with IP tracking to audit any login attempt. Systematically reviewed against all 9 applicable OWASP Top 10 categories.",
            stackTag: "Technology Used",
            stats: [
                { value: "150+", label: "Volunteers and users managed" },
                { value: "24/7", label: "Availability, no one needs to be online for it to work" },
                { value: "100%", label: "Of volunteer and donor data kept under safeguard" },
                { value: "Peace of Mind", label: "The team never has to worry about security" },
            ],
            modules: [
                {
                    number: "01",
                    title: "Users, Roles & Volunteers",
                    desc: "Profiles with photo, email changes verified by code, and username changes with live availability checks — each role (Admin, Coordinator, Volunteer) sees only what applies to them.",
                    image: "/screenshots/soles-usuarios.png",
                    imageAlt: "User and volunteer list in the Soles intranet"
                },
                {
                    number: "02",
                    title: "Automated Attendance",
                    desc: "Clock-in and clock-out, with automatic unexcused-absence generation for shifts that went unmarked past due — no spreadsheets, no manual checks.",
                    image: "/screenshots/soles-asistencia.png",
                    imageAlt: "Attendance control panel in the Soles intranet"
                },
                {
                    number: "03",
                    title: "Training with Assessments",
                    desc: "Courses with materials and self-graded quizzes (multiple choice and true/false), with a results ranking to track every volunteer's progress.",
                    image: "/screenshots/soles-capacitacion.png",
                    imageAlt: "Training quiz with results in the Soles intranet"
                }
            ],
            mentionedTag: "Also included",
            mentionedModules: [
                { title: "Public Transparency", desc: "financial statements & institutional documents" },
                { title: "Access Log", desc: "login attempt auditing with IP tracking" },
                { title: "Branded Transactional Emails", desc: "invitations, password resets & alerts" },
            ],
            visit: "Visit Site",
        },
        almaq: {
            tag: "Frontend",
            subtitle: "Full ground-up development of a responsive web platform for a leading construction firm, with a project gallery featuring its own photo album for every job, and heavy focus on minimalist design and performance.",
            stackTag: "Technology Used",
            modules: [
                {
                    number: "01",
                    title: "Corporate Landing Page",
                    desc: "Minimalist design, asynchronous resource loading, and structural search engine optimization — performance and SEO 100% optimized.",
                    image: "/screenshots/almaq.png",
                    imageAlt: "Almaq Construcción website"
                },
                {
                    number: "02",
                    title: "Project Gallery",
                    desc: "A carousel showcasing the construction firm's completed and ongoing works — each with an image, title, and progress status. Every project has its own page with a full photo album, so clients can see the real work, project by project, without asking for references.",
                    image: "/screenshots/almaq-proyectos.png",
                    imageAlt: "Almaq Construcción project gallery"
                },
                {
                    number: "03",
                    title: "Get a Quote Online",
                    desc: "A contact form so a potential client can request a budget on the spot, no phone call or DM needed — the inquiry lands straight with the company.",
                    image: "/screenshots/almaq-contacto.png",
                    imageAlt: "Almaq Construcción contact and quote form"
                }
            ],
            visit: "Visit Site",
        },
        cruzSacrificio: {
            tag: "Frontend",
            subtitle: "A visual aesthetic renovation of the institutional site, with redesigned critical navigation components and improved SEO and performance.",
            stackTag: "Technology Used",
            modules: [
                {
                    number: "01",
                    title: "Visual Renovation & Performance",
                    desc: "Restructuring of the inherited SASS/SCSS styling architecture, with improved loading speeds, visual hierarchy, and search engine ranking.",
                    image: "/screenshots/cruzsacrificio.png",
                    imageAlt: "Instituto Cruz del Sacrificio website"
                }
            ],
            visit: "Visit Site",
        },
        contact: {
            tag: "Contact",
            title: "Software and infrastructure engineering.",
            desc: "Available to discuss complex technical solutions, full-stack architectures, or development opportunities.",
            location: "Córdoba, Argentina",
            btnMessage: "Send a message",
        }
    }
};