import { React, useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import { TVWidgetChart } from '../components/TradingViewWidget';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import ai from '../svg/ai.jpg';
import chart from '../svg/TVWidgetChart.png';
import logo from '../svg/cerberus-logo.png';
import pinkbot from '../svg/pink-bot.png';
import TypeForm from '../components/TypeForm';

let newsletter_url = "https://kero.substack.com/p/coming-soon";
const Index = () => (
  <Layout>
    <div className="bg-no-repeat bg-right bg-black bg-blend-difference" style={{ backgroundImage: `url(${pinkbot})`}}>
      <section className="text-white py-40">
        <div className="container mx-auto">
          <div className="pt-30 text-left">
            <p className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              <h1>Raise token price.</h1>
              <h1>Save your project.</h1>
            </p>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              <h1>We are KeroFi.</h1>
              We provide market making and custom bot development for DeFi.</p>
            <p className="mt-8 md:mt-12">
              {/*TODO: Add onHover func in <button> jumping for external link*/}
              <Button size="lg"><a style={{ color: "white" }} href={newsletter_url}>Subscribe</a></Button>
            </p>
          </div>
        </div>
       </section>
      </div>
      <TypeForm />
      <section id="features" className="pt-50 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Real-Time Finance</p>
                <p className="mt-4">
                  Streaming salary enables your collaborators to access their funds exactly on time, when they need it.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">DeFi Integrations</p>
                <p className="mt-4">
                  Plays nicely with other DeFi lending and AMM services. Kero manages your collateral stake on Aave or Kashi.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Funding Support</p>
                <p className="mt-4">
                  Kero matches trustworthy project owners with HODLers to maximize investment yield for everyone.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Streaming Salary</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <strong>Worried about getting paid on&nbsp;time?</strong> Kero solves the time lag between contract/work start and payroll receipt, and drastically reduces the cost for employers or investors to move money internationally on a regular basis.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Managed Wallets
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <strong>Kero makes full use of your crypto portfolio.</strong> We manage the lending of these funds to borrowers in <a href="https://jpyc.jp/">JPYC</a>, and accrue rewards for those providing collateral.
          </p>
        </div>
      }
      secondarySlot={
        <img src={chart} alt="Chart" />
      }
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Funding support for project owners
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <strong>Long-term crypto holders can lend their purchasing power to Kero.</strong> Using <em>fiat-pegged virtual currencies</em> (stablecoins) allows payees to receive their money without worrying about slippage.
          </p>
        </div>
      }
      secondarySlot={
        <div className="flex justify-center">
          <img src={ai} alt="Ai" width={320} />
        </div>
      }
    />
    {/* remove this section for now -eli
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    */}
    <section className="container mx-auto py-24 bg-gray-700 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Don't miss out!</h3>
      <p className="mt-8 text-xl font-light">
        Subscribe to our newsletter for news, offers and more.
      </p>
      <p className="mt-8">
        <Button size="xl"><a style={{ color: "white" }} href={newsletter_url}>Subscribe</a></Button>
      </p>
    </section>
  </Layout>
);

export default Index;
