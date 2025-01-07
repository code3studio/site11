import { Button, Highlight } from "../button";
import { CommandMenu } from "../command-menu";
import { Container } from "../container";
import { LogoLightIllustration } from "../illustrations/logo-light";
import { ZapIllustration } from "../illustrations/zap";
import { KeyboardShortcuts } from "../keyboard-shortcuts";

export const UnlikeAnyTool = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
        Real-time
          <br className="hidden md:inline-block" />  Blockchain Queries
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
        Fetch block, epoch, and transaction data with Solana's RPC API, supporting real-time insights, live transactions, and automated tasks.
        </p>
      </div>
    </Container>
    <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
      <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
           <CommandMenu />
          <p className="mb-4 text-3xl">Interactive Chat Assistant</p>
          <p className="text-md text-primary-text">
          Ask Ledgerly blockchain-related questions and get accurate, conversational answers.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="mb-4 text-3xl">Breathtakingly fast</p>
          <p className="text-md text-primary-text">
          Experience breathtakingly fast performance with real-time data, live transactions, and seamless blockchain tasks.
          </p>
        </div>
      </div>
    </div>
  </div>
);
