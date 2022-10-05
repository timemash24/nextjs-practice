import { useState } from 'react';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <div>
      <Seo title="home" />
      <h1 className="active">Home</h1>
    </div>
  );
}
