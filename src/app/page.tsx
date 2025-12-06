'use client';

import React from 'react';
import { ArrowUpRight, Check, Shield, Users, Smartphone, FileText, BarChart3, Mic, History, Target } from 'lucide-react';

export default function Home() {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Controle financeiro inteligente: você envia e a IA faz.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            100% automatizado. Zero planilhas. Zero esforço. Resultados que você sente no bolso.
          </p>
          <button 
            onClick={scrollToPlans}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Começar agora
          </button>
          {/* Mockup visual - placeholder */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-md">
              <p className="text-gray-500">Mockup do app em tema azul, estilo clean e moderno</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Envie do seu jeito</h3>
              <p>Áudio, texto, imagem ou arquivo — o app entende tudo.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">A IA organiza automaticamente</h3>
              <p>Classificação, categorias, datas, saldo e histórico — tudo sem esforço.</p>
            </div>
            <div className="text-center">
              <ArrowUpRight className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Acompanhe tudo em tempo real</h3>
              <p>Gráficos, metas, ranking de gastos e resumo diário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais do App */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Diferenciais do App</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Check className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-semibold mb-2">Backup seguro conectado ao Gmail</h3>
              <p>Seus dados ficam salvos no seu próprio Drive, sempre protegidos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart3 className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2">Organização automática (sem planilhas e sem chat bagunçado)</h3>
              <p>Muito melhor que IA de WhatsApp e infinitamente mais prático que planilhas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-semibold mb-2">Envie como quiser: áudio, texto, imagens ou arquivos</h3>
              <p>O app entende tudo e transforma em dados organizados.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Smartphone className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold mb-2">Criado para ser o app mais fácil de usar no mercado</h3>
              <p>Tudo funciona sozinho — você só envia e pronto.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="font-semibold mb-2">Sincronização em até 3 aparelhos</h3>
              <p>Use a mesma conta no celular, tablet ou outro dispositivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">A diferença é clara</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-semibold">Recursos</th>
                  <th className="p-4 text-left font-semibold">IAs de WhatsApp & Planilhas</th>
                  <th className="p-4 text-left font-semibold">Nosso App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-t">Backup</td>
                  <td className="p-4 border-t text-red-600">Bagunça no chat</td>
                  <td className="p-4 border-t text-green-600">Backup automático no seu Gmail</td>
                </tr>
                <tr>
                  <td className="p-4 border-t">Gráficos</td>
                  <td className="p-4 border-t text-red-600">Sem gráficos</td>
                  <td className="p-4 border-t text-green-600">Gráficos prontos e claros</td>
                </tr>
                <tr>
                  <td className="p-4 border-t">Registros</td>
                  <td className="p-4 border-t text-red-600">Erros, travamentos, perda de registros</td>
                  <td className="p-4 border-t text-green-600">Registros por áudio, texto, imagem e arquivo</td>
                </tr>
                <tr>
                  <td className="p-4 border-t">Organização</td>
                  <td className="p-4 border-t text-red-600">Nada automático</td>
                  <td className="p-4 border-t text-green-600">Organização automática</td>
                </tr>
                <tr>
                  <td className="p-4 border-t">Estabilidade</td>
                  <td className="p-4 border-t text-red-600">Sem backup real</td>
                  <td className="p-4 border-t text-green-600">Estabilidade total</td>
                </tr>
                <tr>
                  <td className="p-4 border-t">Armazenamento</td>
                  <td className="p-4 border-t text-red-600">Depende de WhatsApp</td>
                  <td className="p-4 border-t text-green-600">Tudo salvo na sua conta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Telas do App */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Telas do App</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center shadow-md">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold">Tela de saldo</h3>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center shadow-md">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold">Tela de gráfico</h3>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center shadow-md">
              <Mic className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold">Registro por voz</h3>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center shadow-md">
              <History className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold">Histórico completo</h3>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center shadow-md">
              <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold">Metas simples</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Segurança & Privacidade */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-3xl font-bold mb-8">Segurança & Privacidade</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Seus dados não ficam no WhatsApp, não ficam em planilhas e não ficam perdidos.
            Tudo é salvo no seu próprio Gmail (Google Drive) com backup automático diário.
            É seguro, privado e só você tem acesso.
          </p>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Planos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Plano Mensal</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">R$ 16,50</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Assinar agora
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-blue-600">
              <h3 className="text-2xl font-bold mb-4">Plano Anual</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">R$ 148,50</p>
              <span className="text-sm text-green-600 font-semibold block mb-4">Melhor custo-benefício</span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Assinar agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Meus dados ficam onde?</h3>
              <p>Seus dados ficam salvos de forma segura no seu próprio Google Drive, conectado ao seu Gmail.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Posso usar em outros aparelhos?</h3>
              <p>Sim, você pode sincronizar em até 3 aparelhos diferentes com a mesma conta.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Por que é melhor que IA de WhatsApp?</h3>
              <p>Nosso app oferece organização automática, gráficos, backup seguro e estabilidade, sem depender do WhatsApp.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Como funciona o backup no Gmail?</h3>
              <p>Seus dados são automaticamente salvos no seu Google Drive com backup diário.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Posso registrar por voz, texto e imagem?</h3>
              <p>Sim, o app entende e organiza dados de áudio, texto, imagens e arquivos.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">O app é fácil de usar mesmo?</h3>
              <p>Sim, foi criado para ser o mais fácil do mercado — você só envia e a IA faz tudo.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
