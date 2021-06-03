import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

let url="https://kero.substack.com/p/coming-soon";
const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            For Professinal DeFi Traders... 
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            <h1>We are Cerberus Research, Inc.</h1>
            We'll serve the significant insight about DeFi market.
          </p>
          <p className="mt-8 md:mt-12">
            {/*TODO: Add onHober func in <button> jumping for external link*/}
            <Button size="lg"><a style={{ color: "white" }} href={url}>Subscribe</a></Button>
          </p>
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                DeFi Market Analysis
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                Papertrading Simulation Engine
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                AI trading bot, DeFi specialized strategies, etc.
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
          <h3 className="text-3xl font-semibold leading-tight">DeFi Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We'll server the significant analytics about the rapidly growring DeFi market.  
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
            Papertrading Simulation Engine
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            coming soon...
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            AI trading bot, DeFi specialized strategies, etc.
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            coming soon...
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
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
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Don't miss our update!</h3>
      <p className="mt-8 text-xl font-light">
        We'll provive our update in a newletter. 
      </p>
      <p className="mt-8">
        <Button size="xl"><a style={{ color: "white" }} href={url}>Subscribe</a></Button>
      </p>
    </section>
  </Layout>
);

export default Index;
