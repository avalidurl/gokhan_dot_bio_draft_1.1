import { BlogPosts } from 'app/components/posts';
import './global.css'; // Ensure this path is correct

export default function Page() {
  return (
    <section className="justified-text">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Gökhan Turhan | gokhan.eth
      </h1>
      <p className="mb-4 bullet-paragraph">
        I'm Gökhan Turhan, and currently based in İstanbul, Türkiye. I am an independent researcher with a primary focus on open finance, open source, emergent governance mechanisms, and public goods funding infrastructures. Currently, I am researching proof-of-stake economics alongside the onchain order flow landscape in relation to intents and MEV—since I view these building blocks and sandboxes as culturally evolutionary towards a better understanding of how our present-future societies work. I am also intellectually invested in neurotech, artificial intelligence, privacy by design, idea markets, and dating markets.
      </p>
      <p className="mb-4 bullet-paragraph">
        I am not coming from a directly technical background. I have degrees in American Culture & Literature (BA), & Comparative Literature (MA) specializing into experimental poetics; and, long-term archives, and the maintenance of born-digital artistic, literary & cultural objects at the axes of media labs. I am also a conceptual artist. Having worked as a language instructor, lecturer, customer success lead, content specialist, media planner, and digital marketer; I quit the in-office work at the end of 2019 to pursue my long-termist interests at the junction of longevity, archives, and emergent marketual economies. Since then, I have been directly involved with the world-building aspects of the blockchain-enabled ecosystems.
      </p>
      <p className="mb-4 bullet-paragraph">
        I am also a power user who is nerdsniped by both crypto-native dApps for sophisticated user needs, and minimalist consumer-grade applications especially if they offer SOTA abstraction with elegance and style with a practicality-over-aesthetics approach first. Please do not hesitate to reach me via <a href="mailto:gokhan.eth@pm.me" className="email-link">gokhan.eth@pm.me</a>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
