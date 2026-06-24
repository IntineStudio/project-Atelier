import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'

const projects = [
  {
    name: 'Birch Forest House',
    location: 'Södermanland, Sweden',
    type: 'Residential',
    year: '2024',
    area: '240 m²',
    img: '/project_1.png',
    position: 'center center',
    description: 'A timber-clad retreat dissolving into birch woodland — designed around the rhythm of light through leaves.',
  },
  {
    name: 'Travertine Villa',
    location: 'Mallorca, Spain',
    type: 'Residential & Interiors',
    year: '2023',
    area: '620 m²',
    img: '/project_2.png',
    position: 'center center',
    description: 'A travertine-and-glass residence structured around an internal courtyard and ancient olive tree.',
  },
  {
    name: 'Woodland Pavilion',
    location: 'Öland, Sweden',
    type: 'Cultural / Retreat',
    year: '2022',
    area: '380 m²',
    img: '/project_3.png',
    position: 'center center',
    description: 'A contemplative pavilion for retreat — crafted from local timber, set within a clearing as though grown there.',
  },
]

function ProjectItem({ project, reverse }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeUp>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          borderBottom: '0.5px solid rgba(245,241,234,0.08)',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image — order swapped via CSS order for reverse */}
        <div style={{
          overflow: 'hidden',
          aspectRatio: '4/3',
          position: 'relative',
          order: reverse ? 2 : 1,
        }}>
          <motion.img
            src={project.img}
            alt={project.name}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              objectPosition: project.position,
            }}
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        {/* Info */}
        <div style={{
          padding: 'clamp(32px,4vw,60px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderLeft: reverse ? 'none' : '0.5px solid rgba(245,241,234,0.08)',
          borderRight: reverse ? '0.5px solid rgba(245,241,234,0.08)' : 'none',
          order: reverse ? 1 : 2,
          minHeight: '300px',
        }}>
          <div>
            <h3 style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: 'clamp(28px,3vw,44px)', fontWeight: 300,
              color: '#EDE8DF', lineHeight: 1.15, letterSpacing: '-0.01em',
              marginTop: '20px',
            }}>
              {project.name}
            </h3>
            <p style={{
              marginTop: '16px', fontSize: '13px', lineHeight: 1.75,
              color: 'rgba(237,232,223,0.42)', fontWeight: 300, maxWidth: '340px',
            }}>
              {project.description}
            </p>
          </div>
          <div>
            <div style={{ marginTop: '32px' }}>
              {[
                ['Location', project.location],
                ['Type', project.type],
                ['Year', project.year],
                ['Area', project.area],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '11px 0',
                  borderTop: '0.5px solid rgba(245,241,234,0.07)',
                  fontSize: '11px', letterSpacing: '0.1em',
                }}>
                  <span style={{ textTransform: 'uppercase', color: 'rgba(237,232,223,0.28)', fontWeight: 300 }}>{k}</span>
                  <span style={{ color: 'rgba(237,232,223,0.55)', fontWeight: 300 }}>{v}</span>
                </div>
              ))}
            </div>
            <motion.div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#B8963E', marginTop: '32px', fontWeight: 400,
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', cursor: 'pointer',
              }}
              animate={{ gap: hovered ? '20px' : '12px' }}
              transition={{ duration: 0.3 }}
            >
              View Project <span>→</span>
            </motion.div>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: '#1C1A16', paddingTop: 'clamp(80px,8vw,120px)' }}>
      <FadeUp>
        <div style={{
          padding: '0 clamp(24px,5vw,80px)',
          paddingBottom: 'clamp(48px,6vw,80px)',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          borderBottom: '0.5px solid rgba(245,241,234,0.08)',
          flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <p style={{ fontSize:'9px', letterSpacing:'0.3em', textTransform:'uppercase',
              color:'rgba(184,150,62,0.8)', marginBottom:'20px', fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight:400, display:'flex', alignItems:'center', gap:'10px' }}>
              Selected Works
            </p>
            <h2 style={{ fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize:'clamp(36px,5vw,60px)', fontWeight:300,
              color:'#EDE8DF', lineHeight:1.05, letterSpacing:'-0.01em' }}>
              Recent<br/>
              <em style={{ fontStyle:'italic', color:'rgba(237,232,223,0.35)' }}>Projects</em>
            </h2>
          </div>
        </div>
      </FadeUp>

      {projects.map((p, i) => (
        <ProjectItem key={p.name} project={p} reverse={i % 2 === 1} />
      ))}
    </section>
  )
}
