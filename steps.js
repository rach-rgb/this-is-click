const LAST_EDITED = "2026.06.26";

const sections = [
  {
    title: "개발 기초",
    steps: [
      { id: 1, title: "도구 고르기", href: "index.html" },
      { id: 2, title: "HTML 동적 사이트 만들어보기", href: "step-2.html" },
      { id: 3, title: "Git으로 버전 관리 하기", href: "step-3.html" },
      { id: 4, title: "Local Host로 배포하기", href: "step-4.html" },
      { id: 5, title: "GitHub Pages로 배포해보기", href: "step-5.html" },
      { id: 6, title: "Cloudflare로 배포해보기", href: "step-6.html" },
    ],
  },
  {
    title: "Agent 일 시키기",
    steps: [
      { id: 7, title: "Prompt 작성하기", href: "step-7.html" },
      { id: 8, title: "Skills란 무엇인가?", href: "step-8.html" },
      { id: 9, title: "MCP란 무엇인가?", href: "step-9.html" },
    ],
  },
  {
    title: "뭘 해볼 수 있을까?",
    steps: [{ id: 10, title: "API 연결해보기", href: "step-10.html" }],
  },
];

const stepMeta = Object.fromEntries(
  sections.flatMap((section) => section.steps.map((step) => [step.id, step])),
);

const readySteps = new Set([1, 2, 3, 4]);

const pageContent = {
  1: `
    <header class="page-header">
      <p class="eyebrow">Step 01</p>
      <h2>도구 고르기</h2>
      <p>비개발자라면 채팅으로 시작하고, 필요할 때 코드 편집기로 넘어가면 됩니다.</p>
      <p class="last-edited">마지막 편집: ${LAST_EDITED}</p>
    </header>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">1-1</p>
        <h3>Gemini vs Codex vs Claude</h3>
      </div>

      <div class="notice">모델 평가는 빠르게 바뀝니다. 아래 내용은 개인적인 의견입니다.</div>

      <div class="matrix" role="table" aria-label="AI 도구 비교표">
        <div class="matrix-row matrix-head" role="row">
          <div role="columnheader">도구</div>
          <div role="columnheader">특징</div>
        </div>
        <div class="matrix-row" role="row">
          <div role="cell"><strong>Gemini</strong></div>
          <div role="cell">General한 능력이 좋음</div>
        </div>
        <div class="matrix-row" role="row">
          <div role="cell"><strong>Codex</strong></div>
          <div role="cell">괜찮은 코딩 능력</div>
        </div>
        <div class="matrix-row" role="row">
          <div role="cell"><strong>Claude</strong></div>
          <div role="cell">코딩에 뛰어나지만 Token 소모량이 비쌀 수 있음</div>
        </div>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">1-2</p>
        <h3>개발 도구 형태 고르기</h3>
      </div>

      <div class="screen-grid">
        <article class="screen-card">
          <div class="fake-window app-window" aria-label="Desktop App 화면 예시">
            <div class="window-bar"><span></span><span></span><span></span></div>
            <div class="fake-app-layout">
              <aside></aside>
              <main>
                <div class="chat-line user">HTML 페이지를 만들어줘</div>
                <div class="chat-line agent">파일을 만들고 확인해볼게요.</div>
                <div class="composer">메시지를 입력하세요</div>
              </main>
            </div>
          </div>
          <h4>Desktop App</h4>
          <p>코드를 거의 보지 않고 채팅으로 개발합니다.</p>
        </article>

        <article class="screen-card">
          <div class="fake-window ide-window" aria-label="IDE 화면 예시">
            <div class="window-bar"><span></span><span></span><span></span></div>
            <div class="fake-ide-layout">
              <aside><b>index.html</b><b>styles.css</b></aside>
              <main>
                <code>&lt;h1&gt;Hello&lt;/h1&gt;</code>
                <code>body { color: #222; }</code>
                <code>button { padding: 8px; }</code>
              </main>
              <section>Codex Chat</section>
            </div>
          </div>
          <h4>IDE</h4>
          <p>코드를 보며 함께 개발합니다.</p>
        </article>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">1-3</p>
        <h3>Codex Desktop App 설치하기</h3>
      </div>

      <div class="install-guide">
        <article class="install-card">
          <div class="install-shot store-shot" aria-label="Microsoft Store 설치 화면 예시">
            <div class="shot-top">Microsoft Store</div>
            <div class="store-panel">
              <div class="app-badge">C</div>
              <div><strong>Codex</strong><span>OpenAI</span></div>
              <button>Get</button>
            </div>
          </div>
          <div>
            <p class="step-label">1</p>
            <h4>앱 설치</h4>
            <p><a href="https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi">Microsoft Store</a>에서 Codex를 설치합니다. PowerShell을 안다면 <code>winget install Codex -s msstore</code>도 가능합니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot login-shot" aria-label="로그인 화면 예시">
            <div class="shot-top">Codex</div>
            <div class="center-panel">
              <div class="app-badge">C</div>
              <strong>Sign in to Codex</strong>
              <button>Continue with ChatGPT</button>
            </div>
          </div>
          <div>
            <p class="step-label">2</p>
            <h4>로그인</h4>
            <p>ChatGPT 계정으로 로그인합니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot project-shot" aria-label="프로젝트 추가 화면 예시">
            <div class="shot-top">Projects</div>
            <div class="project-list">
              <button>+ Add new project</button>
              <span>No project selected</span>
            </div>
          </div>
          <div>
            <p class="step-label">3</p>
            <h4>프로젝트 추가</h4>
            <p>왼쪽 목록에서 새 프로젝트를 추가합니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot folder-shot" aria-label="폴더 선택 화면 예시">
            <div class="shot-top">Select Folder</div>
            <div class="folder-list"><span>Desktop</span><span>Documents</span><strong>this-is-click</strong></div>
          </div>
          <div>
            <p class="step-label">4</p>
            <h4>폴더 선택</h4>
            <p>앞으로 만들 파일이 들어갈 폴더를 선택합니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot permission-shot" aria-label="권한 설정 화면 예시">
            <div class="shot-top">Permissions</div>
            <div class="permission-panel">
              <strong>Default permissions</strong>
              <span>Project folder only</span>
              <button>Start</button>
            </div>
          </div>
          <div>
            <p class="step-label">5</p>
            <h4>권한 확인</h4>
            <p>처음에는 기본 권한으로 시작합니다.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="practice-panel">
      <div>
        <p class="eyebrow">1-4</p>
        <h3>첫 통신 확인</h3>
      </div>
      <blockquote>안녕</blockquote>
      <p>채팅창에 <strong>안녕</strong>이라고 입력해 답장이 오는지 먼저 확인합니다. 답장이 온다면 계정 로그인, 앱 실행, AI 통신이 정상인 상태입니다.</p>
    </section>
  `,

  2: `
    <header class="page-header">
      <p class="eyebrow">Step 02</p>
      <h2>HTML 동적 사이트 만들어보기</h2>
      <p>Codex에게 작은 웹페이지를 만들게 하고, 바로 미리보는 흐름을 익힙니다.</p>
      <p class="last-edited">마지막 편집: ${LAST_EDITED}</p>
    </header>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">배경 지식</p>
        <h3>모델 선택하기</h3>
      </div>

      <div class="notice">
        모델 이름과 성능은 바뀔 수 있습니다. 처음에는 Codex가 추천하는 기본 모델을 쓰고,
        작업이 어렵거나 결과가 부족할 때만 더 강한 모델이나 높은 추론 능력을 선택합니다.
      </div>

      <div class="matrix" role="table" aria-label="모델 선택 설명표">
        <div class="matrix-row matrix-head" role="row">
          <div role="columnheader">선택</div>
          <div role="columnheader">언제 쓰나</div>
        </div>
        <div class="matrix-row" role="row">
          <div role="cell"><strong>최신 버전</strong></div>
          <div role="cell">새 프로젝트, 코딩, 도구 사용이 많은 작업에 먼저 씁니다.</div>
        </div>
        <div class="matrix-row" role="row">
          <div role="cell"><strong>가벼운 버전</strong></div>
          <div role="cell">간단한 문장 수정, 빠른 테스트, 비용을 아끼고 싶은 작업에 씁니다.</div>
        </div>
        <div class="matrix-row" role="row">
          <div role="cell"><strong>이전 버전</strong></div>
          <div role="cell">이미 잘 돌아가는 기존 작업을 그대로 이어갈 때 씁니다.</div>
        </div>
      </div>

      <div class="model-options">
        <article>
          <strong>추론 낮음</strong>
          <span>빠릅니다. 단순 수정, 문구 변경, 작은 HTML 작업에 맞습니다.</span>
        </article>
        <article>
          <strong>추론 중간</strong>
          <span>속도와 정확도의 균형입니다. 처음 만드는 웹페이지에 무난합니다.</span>
        </article>
        <article>
          <strong>추론 높음</strong>
          <span>더 오래 생각합니다. 복잡한 버그, 큰 구조 변경, 어려운 설계에 씁니다.</span>
        </article>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">배경 지식</p>
        <h3>HTML 파일이란?</h3>
      </div>

      <div class="notice">
        <strong>HTML</strong>은 웹페이지의 뼈대입니다.
        제목, 문단, 버튼, 이미지 같은 화면 요소를 적어둔 파일입니다.
        보통 <strong>index.html</strong>이라는 이름을 쓰면 브라우저가 첫 페이지로 열기 쉽습니다.
      </div>

      <div class="command-block light-code">
        <div class="shot-top">index.html</div>
        <pre><code>&lt;h1&gt;Codex 소개하기&lt;/h1&gt;
&lt;p&gt;Codex는 코딩을 도와주는 AI 도구입니다.&lt;/p&gt;
&lt;button&gt;자세히 보기&lt;/button&gt;</code></pre>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">2-1</p>
        <h3>Codex에게 웹페이지 만들기 요청하기</h3>
      </div>

      <div class="install-guide">
        <article class="install-card">
          <div class="install-shot prompt-shot" aria-label="Codex 요청 화면 예시">
            <div class="shot-top">Codex</div>
            <div class="fake-prompt">
              <strong>Message</strong>
              <span>Codex 소개하기 웹페이지를 만들어줘</span>
              <button>Send</button>
            </div>
          </div>
          <div>
            <p class="step-label">1</p>
            <h4>요청 문장 입력</h4>
            <p>아래 문장을 그대로 Codex 채팅창에 입력합니다.</p>
          </div>
        </article>
      </div>

      <div class="prompt-box">
        <p>
          이 폴더에 <strong>Codex 소개하기</strong> 웹페이지를 만들어줘.
          <strong>index.html</strong>과 <strong>styles.css</strong>를 사용해줘.
          첫 화면에는 제목, 짧은 설명, 특징 3개, 시작 버튼을 넣어줘.
          버튼을 누르면 아래에 간단한 안내 문구가 나타나게 해줘.
        </p>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">2-2</p>
        <h3>생성한 웹페이지를 Codex에서 미리보기</h3>
      </div>

      <div class="install-guide">
        <article class="install-card">
          <div class="install-shot terminal-shot" aria-label="로컬 서버 실행 요청 화면 예시">
            <div class="shot-top">Codex</div>
            <pre><code>이 웹페이지를 미리볼 수 있게
로컬 서버를 실행하고 주소를 알려줘.</code></pre>
          </div>
          <div>
            <p class="step-label">1</p>
            <h4>미리보기 요청</h4>
            <p>Codex에게 로컬 서버를 실행해달라고 요청합니다. 보통 <code>http://127.0.0.1:포트번호</code> 형태의 주소를 알려줍니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot preview-shot" aria-label="브라우저 미리보기 화면 예시">
            <div class="shot-top">Browser Preview</div>
            <div class="preview-page">
              <strong>Codex 소개하기</strong>
              <span>코딩을 도와주는 AI 도구</span>
              <button>시작하기</button>
            </div>
          </div>
          <div>
            <p class="step-label">2</p>
            <h4>주소 열기</h4>
            <p>Codex가 알려준 주소를 브라우저에서 엽니다. 화면이 보이면 HTML, CSS, JavaScript가 함께 동작하는 상태입니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot app-window" aria-label="수정 요청 화면 예시">
            <div class="shot-top">Codex</div>
            <div class="fake-prompt">
              <strong>Message</strong>
              <span>버튼 색을 초록색으로 바꿔줘</span>
              <button>Send</button>
            </div>
          </div>
          <div>
            <p class="step-label">3</p>
            <h4>보고 바로 수정 요청</h4>
            <p>미리보기에서 어색한 부분을 찾고, Codex에게 짧게 수정 요청을 보냅니다.</p>
          </div>
        </article>
      </div>
    </section>
  `,

  3: `
    <header class="page-header">
      <p class="eyebrow">Step 03</p>
      <h2>Git으로 버전 관리 하기</h2>
      <p>내 컴퓨터의 코드를 GitHub에 올리고, 다시 내려받고, 수정 기록을 남기는 기본 흐름을 익힙니다.</p>
      <p class="last-edited">마지막 편집: ${LAST_EDITED}</p>
    </header>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">3-1</p>
        <h3>GitHub 회원가입하기</h3>
      </div>

      <div class="install-guide">
        <article class="install-card">
          <div class="install-shot signup-shot" aria-label="GitHub 회원가입 화면 예시">
            <div class="shot-top">GitHub</div>
            <div class="center-panel">
              <div class="app-badge">GH</div>
              <strong>Sign up</strong>
              <span>Email address</span>
              <button>Create account</button>
            </div>
          </div>
          <div>
            <p class="step-label">1</p>
            <h4>계정 만들기</h4>
            <p><a href="https://github.com/signup">github.com/signup</a>에 들어가 이메일, 비밀번호, 사용자 이름을 입력합니다. 사용자 이름은 나중에 저장소 주소에 보입니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot login-shot" aria-label="이메일 인증 화면 예시">
            <div class="shot-top">Verify</div>
            <div class="permission-panel">
              <strong>Check your email</strong>
              <span>인증 메일을 열고 버튼을 누릅니다.</span>
              <button>Verify email</button>
            </div>
          </div>
          <div>
            <p class="step-label">2</p>
            <h4>이메일 인증</h4>
            <p>가입 후 받은 인증 메일을 확인합니다. 인증이 끝나야 저장소 생성과 코드 업로드가 편합니다.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">배경 지식</p>
        <h3>Git은 협업을 위한 버전 관리 도구입니다</h3>
      </div>

      <div class="notice">
        <strong>Git</strong>은 파일의 변경 기록을 남기는 도구입니다.
        <strong>GitHub</strong>는 그 기록과 코드를 인터넷 저장소에 올려두는 서비스입니다.
        보통 GitHub의 <strong>Remote Repository</strong>에 코드를 올려놓고, 내 컴퓨터의
        <strong>Local Repository</strong>와 연결해서 사용합니다.
      </div>

      <div class="git-flow" aria-label="로컬 저장소와 원격 저장소 연결 흐름">
        <div><strong>내 컴퓨터</strong><span>Local Repository</span></div>
        <span class="flow-arrow">clone / push</span>
        <div><strong>GitHub</strong><span>Remote Repository</span></div>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">3-2</p>
        <h3>GitHub에서 Repo 만들기</h3>
      </div>

      <div class="install-guide">
        <article class="install-card">
          <div class="install-shot repo-shot" aria-label="새 저장소 만들기 화면 예시">
            <div class="shot-top">New repository</div>
            <div class="repo-form">
              <label>Repository name</label>
              <strong>my-first-site</strong>
              <label>Visibility</label>
              <span>Private</span>
              <button>Create repository</button>
            </div>
          </div>
          <div>
            <p class="step-label">1</p>
            <h4>New repository 선택</h4>
            <p>GitHub 오른쪽 위의 <strong>+</strong> 메뉴에서 <strong>New repository</strong>를 선택합니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot repo-shot" aria-label="저장소 옵션 화면 예시">
            <div class="shot-top">Repository settings</div>
            <div class="repo-form">
              <label>Name</label>
              <strong>this-is-click</strong>
              <label>README</label>
              <span>On</span>
              <button>Create repository</button>
            </div>
          </div>
          <div>
            <p class="step-label">2</p>
            <h4>이름과 공개 범위 정하기</h4>
            <p>처음에는 <strong>Private</strong>로 만들어도 됩니다. 새 프로젝트라면 <strong>Add a README file</strong>을 켜두면 시작하기 쉽습니다.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">3-3</p>
        <h3>로컬에 Git 설치하기</h3>
      </div>

      <div class="notice">아래는 Windows 기준입니다. Git 공식 사이트의 설치 화면은 버전에 따라 조금 달라질 수 있습니다.</div>

      <ol class="steps">
        <li><strong>Git 다운로드</strong><a href="https://git-scm.com/install/windows">git-scm.com/install/windows</a>에서 Windows용 Git 설치 파일을 받습니다. PowerShell을 안다면 <code>winget install --id Git.Git -e --source winget</code>도 사용할 수 있습니다.</li>
        <li><strong>설치 파일 실행</strong>대부분의 선택지는 기본값으로 넘어가도 됩니다. 에디터 선택 화면에서는 잘 모르겠다면 기본값을 그대로 둡니다.</li>
        <li><strong>터미널에서 확인</strong>PowerShell을 열고 <code>git --version</code>을 실행합니다. 버전 번호가 나오면 설치가 끝난 것입니다.</li>
        <li><strong>이름과 이메일 설정</strong>처음 한 번만 아래 명령을 실행합니다. <code>git config --global user.name "내 이름"</code> <code>git config --global user.email "내 이메일"</code></li>
      </ol>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">3-4</p>
        <h3>로컬에서 Git Clone 하기</h3>
      </div>

      <div class="install-guide">
        <article class="install-card">
          <div class="install-shot clone-shot" aria-label="GitHub 코드 주소 복사 화면 예시">
            <div class="shot-top">Code</div>
            <div class="permission-panel">
              <strong>HTTPS</strong>
              <span>https://github.com/me/my-first-site.git</span>
              <button>Copy</button>
            </div>
          </div>
          <div>
            <p class="step-label">1</p>
            <h4>저장소 주소 복사</h4>
            <p>저장소 화면에서 <strong>Code</strong> 버튼을 누르고 HTTPS 주소를 복사합니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot terminal-shot" aria-label="Git clone 명령 화면 예시">
            <div class="shot-top">PowerShell</div>
            <pre><code>cd Documents
git clone https://github.com/me/my-first-site.git
cd my-first-site</code></pre>
          </div>
          <div>
            <p class="step-label">2</p>
            <h4>내 컴퓨터로 내려받기</h4>
            <p>프로젝트를 둘 폴더에서 <code>git clone 저장소주소</code>를 실행합니다. 그러면 GitHub의 Remote Repository가 내 컴퓨터에 복사됩니다.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">3-5</p>
        <h3>Git Add - Commit - Push 이해하기</h3>
      </div>

      <div class="matrix git-command-table" role="table" aria-label="Git 기본 명령 설명표">
        <div class="matrix-row matrix-head" role="row">
          <div role="columnheader">명령</div>
          <div role="columnheader">하는 일</div>
        </div>
        <div class="matrix-row" role="row">
          <div role="cell"><strong>git add</strong></div>
          <div role="cell">이번 기록에 넣을 파일을 고릅니다.</div>
        </div>
        <div class="matrix-row" role="row">
          <div role="cell"><strong>git commit</strong></div>
          <div role="cell">고른 파일들을 하나의 변경 기록으로 저장합니다.</div>
        </div>
        <div class="matrix-row" role="row">
          <div role="cell"><strong>git push</strong></div>
          <div role="cell">내 컴퓨터의 변경 기록을 GitHub Remote Repository에 올립니다.</div>
        </div>
      </div>

      <div class="command-block">
        <div class="shot-top">PowerShell</div>
        <pre><code>git status
git add .
git commit -m "첫 페이지 추가"
git push</code></pre>
      </div>

      <div class="notice">
        <strong>순서만 기억하세요.</strong>
        파일을 수정한 뒤 <strong>add</strong>로 고르고, <strong>commit</strong>으로 기록하고,
        <strong>push</strong>로 GitHub에 올립니다.
      </div>
    </section>
  `,

  4: `
    <header class="page-header">
      <p class="eyebrow">Step 04</p>
      <h2>Local Host로 배포하기</h2>
      <p>내 컴퓨터에서 FastAPI 서버를 띄우고, 브라우저와 다른 기기에서 접속하는 흐름을 익힙니다.</p>
      <p class="last-edited">마지막 편집: ${LAST_EDITED}</p>
    </header>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">배경 지식</p>
        <h3>서버와 클라이언트</h3>
      </div>

      <div class="notice">
        <strong>서버</strong>는 프로그램이 떠 있는 컴퓨터입니다.
        <strong>클라이언트</strong>는 서버에 접속해서 페이지, 이미지, 데이터 같은 요청을 보내는 쪽입니다.
        지금은 내 컴퓨터가 서버이면서 클라이언트가 됩니다.
      </div>

      <div class="server-flow" aria-label="서버와 클라이언트 요청 흐름">
        <div class="flow-node client-node">
          <strong>클라이언트</strong>
          <span>브라우저</span>
          <small>GET /</small>
        </div>
        <div class="flow-lane">
          <span>요청</span>
          <b>HTML 응답</b>
        </div>
        <div class="flow-node server-node">
          <strong>서버</strong>
          <span>FastAPI 프로그램</span>
          <small>127.0.0.1:8000</small>
        </div>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">배경 지식</p>
        <h3>Python</h3>
      </div>

      <div class="notice">
        <strong>Python</strong>은 프로그래밍 언어입니다.
        문법이 비교적 읽기 쉽고, 웹 서버, 자동화, 데이터 작업에 많이 씁니다.
        이 단계에서는 Python으로 FastAPI 서버를 실행합니다.
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">4-1</p>
        <h3>Python 설치하기</h3>
      </div>

      <div class="install-guide">
        <article class="install-card">
          <div class="install-shot store-shot" aria-label="Python 설치 화면 예시">
            <div class="shot-top">python.org</div>
            <div class="center-panel">
              <div class="app-badge">Py</div>
              <strong>Download Python</strong>
              <button>Install</button>
            </div>
          </div>
          <div>
            <p class="step-label">1</p>
            <h4>Python 받기</h4>
            <p><a href="https://www.python.org/downloads/">python.org/downloads</a>에서 Windows용 Python을 설치합니다. Microsoft Store에서 설치해도 됩니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot permission-shot" aria-label="Python PATH 설정 화면 예시">
            <div class="shot-top">Python Installer</div>
            <div class="permission-panel">
              <strong>Add python.exe to PATH</strong>
              <span>체크한 뒤 설치합니다.</span>
              <button>Install Now</button>
            </div>
          </div>
          <div>
            <p class="step-label">2</p>
            <h4>PATH 체크</h4>
            <p>설치 화면에서 <strong>Add python.exe to PATH</strong>가 보이면 체크합니다. 그래야 PowerShell에서 <code>python</code> 명령을 바로 쓸 수 있습니다.</p>
          </div>
        </article>

        <article class="install-card">
          <div class="install-shot terminal-shot" aria-label="Python 설치 확인 명령 예시">
            <div class="shot-top">PowerShell</div>
            <pre><code>python --version
python -m pip --version</code></pre>
          </div>
          <div>
            <p class="step-label">3</p>
            <h4>설치 확인</h4>
            <p>PowerShell을 새로 열고 두 명령을 실행합니다. 버전 번호가 나오면 준비된 상태입니다.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">배경 지식</p>
        <h3>FastAPI, Uvicorn</h3>
      </div>

      <div class="notice">
        <strong>FastAPI</strong>는 Python으로 웹 서버와 API를 쉽게 만드는 도구입니다.
        <strong>Uvicorn</strong>은 FastAPI 앱을 실제로 실행해서 요청을 받게 해주는 서버 실행 도구입니다.
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">4-2</p>
        <h3>FastAPI, Uvicorn 설치하기</h3>
      </div>

      <ol class="steps">
        <li><strong>프로젝트 폴더로 이동</strong>PowerShell에서 작업 폴더로 이동합니다. 예: <code>cd Documents\\this-is-click</code></li>
        <li><strong>가상환경 만들기</strong><code>python -m venv .venv</code>를 실행합니다. 프로젝트마다 독립된 Python 공간을 만드는 과정입니다.</li>
        <li><strong>가상환경 켜기</strong><code>.venv\\Scripts\\Activate</code>를 실행합니다. 앞에 <code>(.venv)</code>가 보이면 켜진 상태입니다.</li>
        <li><strong>패키지 설치</strong><code>python -m pip install "fastapi[standard]"</code>를 실행합니다. 이 설치에는 FastAPI 실행에 필요한 Uvicorn도 함께 들어옵니다.</li>
      </ol>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">4-3</p>
        <h3>Codex에게 FastAPI 호스팅 요청하기</h3>
      </div>

      <div class="install-guide">
        <article class="install-card">
          <div class="install-shot prompt-shot" aria-label="Codex FastAPI 요청 화면 예시">
            <div class="shot-top">Codex</div>
            <div class="fake-prompt">
              <strong>Message</strong>
              <span>FastAPI로 HTML을 호스팅해줘</span>
              <button>Send</button>
            </div>
          </div>
          <div>
            <p class="step-label">1</p>
            <h4>요청 문장 입력</h4>
            <p>Codex에게 서버 파일을 만들고 실행 방법까지 정리해달라고 요청합니다.</p>
          </div>
        </article>
      </div>

      <div class="prompt-box">
        <p>
          FastAPI를 사용해서 이 폴더의 <strong>index.html</strong>과 <strong>styles.css</strong>를 호스팅해줘.
          <strong>main.py</strong>를 만들고, 정적 파일을 브라우저에서 볼 수 있게 해줘.
          실행 명령어와 접속 주소도 알려줘.
        </p>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">4-4</p>
        <h3>FastAPI 서버 실행하기</h3>
      </div>

      <div class="command-block">
        <div class="shot-top">PowerShell</div>
        <pre><code>.venv\\Scripts\\Activate
uvicorn main:app --reload</code></pre>
      </div>

      <div class="server-log" aria-label="FastAPI 서버 로그 예시">
        <div><strong>INFO:</strong><span>Uvicorn running on http://127.0.0.1:8000</span></div>
        <div><strong>INFO:</strong><span>Started reloader process</span></div>
        <div><strong>INFO:</strong><span>Started server process</span></div>
        <div><strong>INFO:</strong><span>Application startup complete.</span></div>
      </div>

      <div class="notice">
        <strong>Uvicorn running</strong>은 서버 주소입니다.
        <strong>Started server process</strong>는 서버 프로그램이 켜졌다는 뜻입니다.
        <strong>CTRL+C</strong>를 누르면 서버가 꺼집니다.
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">배경 지식</p>
        <h3>호스트와 포트</h3>
      </div>

      <div class="host-port-grid">
        <article>
          <strong>Host</strong>
          <span>어느 네트워크 주소에서 받을지 정합니다. <code>127.0.0.1</code>은 내 컴퓨터 안에서만 접속합니다.</span>
        </article>
        <article>
          <strong>Port</strong>
          <span>한 컴퓨터 안에서 서버를 구분하는 번호입니다. FastAPI 예제는 보통 <code>8000</code>을 씁니다.</span>
        </article>
      </div>
    </section>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">4-5</p>
        <h3>외부에서 접속 가능하게 호스트 설정하기</h3>
      </div>

      <div class="command-block">
        <div class="shot-top">PowerShell</div>
        <pre><code>uvicorn main:app --host 0.0.0.0 --port 8000 --reload</code></pre>
      </div>

      <div class="notice">
        <strong>0.0.0.0</strong>은 내 컴퓨터의 외부 네트워크 주소에서도 요청을 받겠다는 뜻입니다.
        같은 Wi-Fi에 있는 다른 기기에서는 <strong>http://내컴퓨터IP:8000</strong> 형태로 접속합니다.
        Windows 방화벽 알림이 뜨면 현재 네트워크에서 허용해야 접속됩니다.
      </div>
    </section>

    <section class="practice-panel">
      <div>
        <p class="eyebrow">4-6</p>
        <h3>외부에서 접속할 수 있습니다</h3>
      </div>
      <blockquote>http://내컴퓨터IP:8000</blockquote>
      <p>
        휴대폰이나 다른 노트북에서 같은 Wi-Fi에 접속한 뒤 위 주소를 엽니다.
        페이지가 보이면 내 컴퓨터의 FastAPI 서버가 외부 요청을 받고 있는 상태입니다.
      </p>
    </section>
  `,
};

function placeholderPage(step) {
  return `
    <header class="page-header">
      <p class="eyebrow">Step ${String(step.id).padStart(2, "0")}</p>
      <h2>${step.title}</h2>
      <p>이 단계는 곧 작성됩니다.</p>
      <p class="last-edited">마지막 편집: ${LAST_EDITED}</p>
    </header>

    <section class="lesson-section">
      <div class="section-heading">
        <p class="eyebrow">준비 중</p>
        <h3>다음 업데이트 예정</h3>
      </div>
      <p class="empty-page">이 페이지에는 단계별 실습과 필요한 배경 지식이 추가될 예정입니다.</p>
    </section>
  `;
}

function renderToc(currentStep) {
  const toc = document.querySelector("#guide-toc");
  toc.innerHTML = sections
    .map(
      (section) => `
        <section>
          <h2>${section.title}</h2>
          ${section.steps
            .map((step) => {
              const active = step.id === currentStep;
              const ready = readySteps.has(step.id);
              if (!ready) {
                return `
                  <span class="toc-item disabled" aria-disabled="true">
                    <span>${String(step.id).padStart(2, "0")}</span>
                    <strong>${step.title}</strong>
                  </span>
                `;
              }

              return `
                <a class="toc-item ${active ? "active" : ""}" href="${step.href}" ${active ? 'aria-current="page"' : ""}>
                  <span>${String(step.id).padStart(2, "0")}</span>
                  <strong>${step.title}</strong>
                </a>
              `;
            })
            .join("")}
        </section>
      `,
    )
    .join("");
}

function setupTocToggle() {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".toc-toggle");
  const toc = document.querySelector("#guide-toc");

  toggle.addEventListener("click", () => {
    const isCollapsed = sidebar.classList.toggle("is-collapsed");
    toggle.setAttribute("aria-expanded", String(!isCollapsed));
    toggle.setAttribute("aria-label", isCollapsed ? "목차 펼치기" : "목차 접기");
    toc.hidden = isCollapsed;
  });
}

function redirectLegacyHash() {
  const match = window.location.hash.match(/^#step-(\d+)$/);
  if (!match) return false;

  const target = stepMeta[Number(match[1])];
  if (!target) return false;

  const currentStep = Number(document.body.dataset.step || "1");
  if (currentStep !== target.id) {
    window.location.replace(target.href);
    return true;
  }

  history.replaceState(null, "", window.location.pathname);
  return false;
}

function renderPage() {
  if (redirectLegacyHash()) return;

  const currentStep = Number(document.body.dataset.step || "1");
  const step = stepMeta[currentStep] || stepMeta[1];
  const main = document.querySelector("#page-content");

  document.title = `${step.title} | 바이브 코딩 가이드`;
  renderToc(currentStep);
  main.innerHTML = pageContent[currentStep] || placeholderPage(step);
  setupTocToggle();
}

renderPage();
