import { AlanLogo } from "../logos/alan";
import { ArcLogo } from "../logos/arc";
import { CashAppLogo } from "../logos/cashapp";
import { DescriptLogo } from "../logos/descript";
import { LoomLogo } from "../logos/loom";
import { MercuryLogo } from "../logos/mercury";
import { OpenSeaLogo } from "../logos/opensea";
import { PitchLogo } from "../logos/pitch";
import { RampLogo } from "../logos/ramp";
import { RaycastLogo } from "../logos/raycast";
import { RetoolLogo } from "../logos/retool";
import { VercelLogo } from "../logos/vercel";

export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-primary-text">
        Empowering developers and innovators on the Solana blockchain.
      </span>
      <br className="hidden md:block" /> From seasoned experts to curious beginners.
    </p>

    <div className="flex flex-wrap justify-around gap-x- gap-y-8">
      <div className="flex flex-col items-center">
        <img src="/openai.png" alt="OpenAI Logo" className="h-12 w-12" />
        <span className="mt-2 text-white">OpenAI</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/javascript.png" alt="OpenAI Logo" className="h-12 w-12" />
        <span className="mt-2 text-white">JavaScript</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/python.png" alt="Python Logo" className="h-12 w-12" />
        <span className="mt-2 text-white">Python</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/rust.png" alt="OpenAI Logo" className="h-12 w-12" />
        <span className="mt-2 text-white">Rust</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/aws.png" alt="Python Logo" className="h-12 w-12" />
        <span className="mt-2 text-white">AWS</span>
      </div>
    </div>
    
  </>
);
