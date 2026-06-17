import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { ProjectsReveal } from "@/components/projects-reveal";
import { SkillsCarousel } from "@/components/skills-carousel";
import { getLanguageAlternates, isLocale, localeCopy } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  return {
    title:
      localeParam === "ja"
        ? "Will Hargrave - ソフトウェアエンジニア"
        : "Software Engineering Portfolio",
    description: site.description[localeParam],
    alternates: {
      languages: getLanguageAlternates(),
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const copy = localeCopy[localeParam];
  const activeProjects = projects.filter(
    (project) => project.status === "active",
  );

  return (
    <>
      <section className="bg-[color:var(--surface)]">
        <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-start md:py-24">
          <div className="min-w-0">
            <h1 className="reveal-on-load reveal-delay-1 mt-5 max-w-3xl text-4xl font-semibold tracking-normal text-[color:var(--foreground)] sm:text-5xl">
              {localeParam === "ja" ? (
                <span className="flex flex-col gap-4">
                  <span>Will Hargrave</span>
                  <span className="h-px w-full max-w-md bg-[color:var(--foreground)]" />
                  <span>ソフトウェアエンジニア</span>
                </span>
              ) : (
                <span className="flex flex-col gap-4">
                  <span>Will Hargrave</span>
                  <span className="h-px w-full max-w-md bg-[color:var(--foreground)]" />
                  <span>Software Engineer</span>
                </span>
              )}
            </h1>
            <p className="reveal-on-load reveal-delay-1 mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
              {localeParam === "ja"
                ? "フルスタック領域で経験を持つイギリス出身のソフトウェアエンジニアで、現在は日本での機会を探しています。他のエンジニアと協力し、学び合いながら新しいアイデアを形にすることが好きです。ソフトウェアエンジニアリングはより良い世界を作る最前線にあると考えており、その理想に合う企業で働くことに情熱を持っています。"
                : "British software engineer with experience across the stack, currently looking for opportunities in Japan. I enjoy working with and learning from other engineers to develop new ideas. I believe software engineering is at the forefront of creating a better world and I am passionate about working for companies that are aligned with these ideals"}
            </p>
            <div className="reveal-on-load reveal-delay-1 mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="font-heading rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
              >
                {copy.actions.contact}
              </a>
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-heading rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
              >
                GitHub
              </a>
            </div>
            <div className="reveal-on-load reveal-delay-3">
              <SkillsCarousel />
            </div>
          </div>

          <aside className="reveal-on-load reveal-delay-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-alt)] p-6">
            <h2 className="text-base font-semibold text-[color:var(--foreground)]">
              {localeParam === "ja" ? "職務経験" : "Work Experience"}
            </h2>
            <div className="mt-4 max-h-[420px] space-y-5 overflow-y-auto pr-3 text-sm leading-6 text-[color:var(--muted)]">
              <section>
                <div className="mt-3">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <h4 className="font-semibold text-[color:var(--foreground)]">
                      BJSS
                    </h4>
                    <p>2023-2025</p>
                  </div>
                  <p className="font-heading mt-2 font-medium text-[color:var(--foreground)]">
                    {localeParam === "ja"
                      ? "ソフトウェアエンジニア"
                      : "Software engineer"}
                  </p>
                </div>
                <div className="mt-4 space-y-3">
                  <p>
                    {localeParam === "ja"
                      ? "Next.js と TypeScript を使用し、クリーンでテストしやすい UI アーキテクチャを重視しながら、フロントエンド機能とプロトタイプを開発しました。これにより、社内で AI ツールをどのように活用できるかを会社が理解する助けとなりました。"
                      : "Developed front-end features and prototypes using Next.js and TypeScript with an emphasis on clean, testable UI architecture. This enabled the company to understand how AI tools can be used across the company."}
                  </p>
                  <p>
                    {localeParam === "ja"
                      ? "社内で LLM をどのように活用すべきかを検討するプロジェクトの一環として、LLM ツール、Next.js、TypeScript を使用して予約サイトのクローンを作成しました。その過程を文書化し、コーディング支援に最も適したツールを検証するとともに、社内での利用指針を作成しました。"
                      : "As part of a project to explore how LLMs should be used within the company, created a clone of a booking website using LLM tools, Next.js and TypeScript. I documented the process to explore which tools were most suitable for assisting with coding and to create a guideline for how they should be used across the company."}
                  </p>
                  <p>
                    {localeParam === "ja"
                      ? "大規模な予約・チェックアウト移行に向けて包括的な QA テスト計画を設計・実行し、重要な不具合を早期に発見することで、影響を最小限に抑えた円滑な切り替えに貢献しました。"
                      : "Designed and executed comprehensive QA test plans for a large-scale booking and checkout migration, finding critical defects early and helping ensure a smooth cutover with minimal disruption."}
                  </p>
                  <p>
                    {localeParam === "ja"
                      ? "Pytest を使用した Python の自動テストフレームワークを構築、保守、最適化し、信頼性を高めるとともに全体のテストカバレッジを拡大しました。"
                      : "Built, maintained, and optimised a Python automated test framework using Pytest, improving reliability and expanding overall test coverage."}
                  </p>
                  <p>
                    {localeParam === "ja"
                      ? "予約から決済までのフロー全体でエンドツーエンドの統合テストとネットワークテストを実施し、プラットフォーム変更時の複数サービス間のシステム挙動を検証しました。"
                      : "Performed end-to-end integration and network testing across the booking-to-payment flow, validating system behaviour across services during platform changes."}
                  </p>
                  <p>
                    {localeParam === "ja"
                      ? "手動テストと BrowserStack を用いて、主要ブラウザで一貫したユーザー体験を確保するためのクロスブラウザ・デバイス互換性テストを実施しました。"
                      : "Delivered cross-browser and device compatibility testing across manual testing and BrowserStack to ensure a consistent user experience across major browsers."}
                  </p>
                  <p>
                    {localeParam === "ja"
                      ? "JIRA で不具合のトリアージと追跡を担当し、明確で実行しやすいチケットを作成しながら、複数のエンジニアリングチーム間で修正対応を調整しました。"
                      : "Owned defect triage and tracking in JIRA, writing clear, actionable tickets and coordinating fixes across multiple engineering teams."}
                  </p>
                  <p>
                    {localeParam === "ja"
                      ? "Jest を使用して Web アプリケーションと AI 駆動ツールの自動テストを実装し、再現可能な評価スイートを作成して結果をステークホルダーに共有しました。"
                      : "Implemented automated testing for web applications and AI-driven tools using Jest, producing repeatable evaluation suites and communicating results to stakeholders."}
                  </p>
                  <p>
                    {localeParam === "ja"
                      ? "WCAG 基準を満たすためのアクセシビリティテストを実施し、導入支援と品質向上のためにデモや調査結果をステークホルダーへ発表しました。"
                      : "Ran accessibility testing to meet WCAG standards, and presented demos and findings to stakeholders to support adoption and improve product quality."}
                  </p>
                </div>
              </section>
            </div>
          </aside>
        </Container>
      </section>

      <section id="projects" className="scroll-mt-8">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-normal">
              {localeParam === "ja" ? "プロジェクト" : "Projects"}
            </h2>
          </div>

          <ProjectsReveal>
            <div
              className="-mx-5 mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-8 sm:-mx-8 sm:gap-10 sm:px-8"
              aria-label={
                localeParam === "ja"
                  ? "プロジェクトカルーセル"
                  : "Project carousel"
              }
            >
              {activeProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  locale={localeParam}
                  project={project}
                />
              ))}
            </div>
          </ProjectsReveal>
        </Container>
      </section>
    </>
  );
}
