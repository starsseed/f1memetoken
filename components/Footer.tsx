import siteMetadata from 'content/siteMetadata';
import Link from 'next/link';
import { Suspense } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaSpotify, FaSteam, FaTwitter, FaTelegram } from 'react-icons/fa';
import SectionContainer from './SectionContainer';
import NowPlaying from './Spotify/NowPlaying';
import Image from 'next/image';
import dexLogo from '@/content/dexscreener.png';
import coinmarketcapLogo from '@/content/coinmarketcap.svg';
import jupiterLogo from '@/content/jupiter.png';

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 flex flex-col justify-start space-y-1.5 space-x-0 py-10 text-gray-500 dark:text-gray-400">
          <Suspense fallback="loading...">
            <NowPlaying />
          </Suspense>
          <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2">
              <li>{`© ${new Date().getFullYear()}`}</li>
              <li>{` • `}</li>
              <li>
                <Link href="/">{siteMetadata.title}</Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center space-x-5">
              <li>
                <a
                  href={siteMetadata.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <FaTwitter className="text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.telegram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="telegram"
                >
                  <FaTelegram className="text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.solscan}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="solscan"
                >
                  <AiFillLinkedin className="text-lg" />
                </a>
              </li>
              <li>
                <a href={siteMetadata.dexscreener} target="_blank" rel="noreferrer" aria-label="dexscreener">
                    <Image
                      src={dexLogo}
                      width={20}
                      height={20}
                      className=""
                      alt="-"
                    />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.coinmarketcap}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="coinmarketcap"
                >
                  <Image
                      src={coinmarketcapLogo}
                      width={20}
                      height={20}
                      className=""
                      alt="-"
                    />
                </a>
              </li>
              <li>
                <a href={siteMetadata.jupiter} target="_blank" rel="noreferrer" aria-label="jupiter">
                  <Image
                      src={jupiterLogo}
                      width={20}
                      height={20}
                      className=""
                      alt="-"
                    />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
