<template>
  <div>
    <div class="shadow-inner bg-gray-100 py-8 text-center">
      <h2 class="text-3xl text-gray-700">
        Nuxt<span class="text-green-500">Js</span> Newsletter
      </h2>
      <div class="text-gray-500 mt-5">
        Get the latest Nuxt news to your inbox, curated by the NuxtJS team.
      </div>
      <div class="mt-5 flex items-center justify-center">
        <input
          type="text"
          class="w-64 rounded rounded-r-none px-4 py-3 border border-r-0 outline-none focus:border-green-400 h-12"
          placeholder="Email"
        />
        <button
          type="submit"
          class="text-white bg-green-400 py-3 px-4 rounded rounded-l-none uppercase cursor-pointer outline-none shadow h-12"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>

    <div class="flex justify-between w-3/4 mx-auto py-10">
      <div class="text-left">
        <h3 class="uppercase pb-4 text-lg font-bold text-gray-500">DISCOVER</h3>
        <div
          class="py-2 text-gray-500 transition duration-300 hover:text-green-500 ease-in-out cursor-pointer"
        >
          Design resources
        </div>
        <div
          class="py-2 text-gray-500 transition duration-300 hover:text-green-500 ease-in-out cursor-pointer"
        >
          A worldwide team
        </div>
        <div
          class="py-2 text-gray-500 transition duration-300 hover:text-green-500 ease-in-out cursor-pointer"
        >
          Blog
        </div>
      </div>
      <div class="text-center">
        <h3 class="uppercase pb-4 text-lg font-bold text-gray-500">FOLLOW</h3>
        <div class="py-2 text-gray-500">
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="py-2 text-gray-500 transition duration-300 hover:text-green-500 ease-in-out cursor-pointer"
          >
            GitHub
          </a>
        </div>
        <div class="py-2 text-gray-500">
          <a
            href="https://twitter.com/nuxt_js"
            target="_blank"
            class="py-2 text-gray-500 transition duration-300 hover:text-green-500 ease-in-out cursor-pointer"
          >
            Twitter
          </a>
        </div>
        <div class="py-2 text-gray-500">
          <a
            href="https://discord.com/invite/ps2h6QT"
            target="_blank"
            class="transition duration-300 hover:text-green-500 ease-in-out cursor-pointer"
          >
            Discord
          </a>
        </div>
      </div>
      <div class="text-right">
        <h3 class="uppercase pb-4 text-lg font-bold text-gray-500">SUPPORT</h3>
        <div
          class="py-2 text-gray-500 transition duration-300 hover:text-green-500 ease-in-out cursor-pointer"
        >
          Sponsor NuxtJS
        </div>
        <div
          class="py-2 text-gray-500 transition duration-300 hover:text-green-500 ease-in-out cursor-pointer"
        >
          The NuxtJS Shop
        </div>
        <div
          class="py-2 text-gray-500 transition duration-300 hover:text-green-500 ease-in-out cursor-pointer"
        >
          NuxtJS Consulting
        </div>
      </div>
    </div>

    <div class="border-t">
      <div class="w-3/4 mx-auto py-4 flex justify-between items-center">
        <div class="w-1/3">
          <button
            class="h-10 px-4 flex justify-around items-center bg-gray-200 rounded-full"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.6569 17.6569M6.34315 6.34315L5.63604 5.63604M18.364 5.63609L17.6569 6.3432M6.3432 17.6569L5.63609 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  data-v-14717ba2=""
                ></path>
              </svg>
            </div>
            <div class="ml-2">Light</div>
          </button>
        </div>
        <div class="w-1/3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="24"
            class="nui-svg nui-svg-mountains inline-block h-6 lg:h-auto text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M2.02631579 21.89h7.66285088c.04383933-.2870199.13752342-.5644221.27692982-.82L17.1527632 8.59666667 13.4142105 2.11 2.02631579 21.89zM26.8284211 21.89h3.5663157L21.0331579 5.64666667l-1.6885965 2.95L26.5177193 21.07c.1528748.2525775.2581408.530394.3107018.82zM18.2435965 10.49l-6.5686404 11.4h13.1339035z"
              ></path>
              <path
                fill="#00C58E"
                d="M9.86815789 22.96c-.02406145-.0419978-.04549056-.0854126-.06416666-.13-.12953704-.2957887-.16942152-.6222991-.11482456-.94H2.02631579L13.4142105 2.11l3.7385527 6.48666667 1.0840789-1.89333334-3.2589912-5.66666666C14.8866667.87333333 14.3361842 0 13.387193 0c-.4289035 0-1.0435526.18333333-1.5433772 1.05L.30732456 21.07c-.0979386.1733333-.5741228 1.0833333-.10131579 1.89.21614035.3666667.6754386.8033333 1.68859649.8033333h9.66214914c-1.0064035 0-1.4724562-.43-1.68859651-.8033333z"
                class="fill-nuxt-lightgreen"
              ></path>
              <path
                fill="#108775"
                d="M32.0833333 21.07L22.6035526 4.58666667c-.0979386-.17333334-.6450438-1.05-1.5974122-1.05-.4289036 0-1.0435527.18-1.5433772 1.04666666l-1.2259211 2.12 1.0908333 1.89333334 1.6885965-2.95L30.3947368 21.89h-3.5663157c.0456348.2685253.0200378.5441387-.0742983.8-.0198676.0564887-.0447295.1111437-.0742982.1633333l-.0303948.06c-.4795614.8066667-1.5163596.85-1.7189912.85h5.5791228c.2060088 0 1.2394298-.0433333 1.7189912-.85.2127632-.3666666.3647369-.9833333-.1452193-1.8433333z"
                class="fill-nuxt-green"
              ></path>
              <path
                fill-rule="nonzero"
                d="M26.6494298 22.9133333l.0303948-.06c.0295687-.0521896.0544306-.1068446.0742982-.1633333.0943361-.2558613.1199331-.5314747.0742983-.8-.052561-.289606-.157827-.5674225-.3107018-.82L19.3344298 8.59666667l-1.0975877-1.89333334-1.0908333 1.89333334L9.96609649 21.07c-.1394064.2555779-.23309049.5329801-.27692982.82-.05778518.3167382-.02142363.6432154.10469298.94.0186761.0445874.04010522.0880022.06416667.13.21614038.3666667.67543858.8033333 1.68859648.8033333H24.920307c.2127632 0 1.2495614-.0433333 1.7291228-.85zM18.2368421 10.49l6.5652632 11.4H11.6749561l6.561886-11.4z"
                class="fill-current"
              ></path>
            </g>
          </svg>
        </div>
        <div class="w-1/3 flex justify-end">
          <button
            class="flex items-center bg-gray-200 rounded-full px-4 h-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="fill-current"
            >
              <path
                fill-rule="nonzero"
                d="M8 0C3.58064516 0 0 3.58064516 0 8c0 4.4193548 3.58064516 8 8 8 4.4193548 0 8-3.5806452 8-8 0-4.41935484-3.5806452-8-8-8zm6.2322581 4.90322581h-2.6612904c-.2903225-1.43225807-.7774193-2.65161291-1.3935483-3.51935484 1.7741935.58709677 3.232258 1.86774193 4.0548387 3.51935484zM10.8387097 8c0 .73870968-.0516129 1.42580645-.1387097 2.0645161H5.3C5.21290323 9.42580645 5.16129032 8.73870968 5.16129032 8c0-.73870968.05161291-1.42580645.13870968-2.06451613h5.4c.0870968.63870968.1387097 1.32580645.1387097 2.06451613zM8 1.03225806c.86774194 0 1.98064516 1.42258065 2.5193548 3.87096775H5.48064516C6.01935484 2.45483871 7.13225806 1.03225806 8 1.03225806zm-2.17741935.35161291c-.61290323.86451613-1.10322581 2.08387097-1.39354839 3.51935484H1.76774194C2.59032258 3.2516129 4.0483871 1.97096774 5.82258065 1.38387097zM1.03225806 8c0-.71935484.10967742-1.41290323.31290323-2.06451613h2.91935484C4.18064516 6.59677419 4.12903226 7.28387097 4.12903226 8c0 .71612903.04838709 1.40322581.13548387 2.0645161H1.34516129C1.14193548 9.41290323 1.03225806 8.71935484 1.03225806 8zm.73548388 3.0967742h2.66129032c.29032258 1.4322581.77741935 2.6516129 1.39354839 3.5193548-1.77419355-.5870967-3.23225807-1.8677419-4.05483871-3.5193548zM8 14.9677419c-.86774194 0-1.98064516-1.4225806-2.51935484-3.8709677h5.03870964C9.98064516 13.5451613 8.86774194 14.9677419 8 14.9677419zm2.1774194-.3516129c.6129032-.8645161 1.1032258-2.0838709 1.3935483-3.5193548h2.6612904c-.8225807 1.6516129-2.2806452 2.9322581-4.0548387 3.5193548zm1.5580645-4.5516129c.0838709-.66129029.1354838-1.34838707.1354838-2.0645161s-.0483871-1.40322581-.1354838-2.06451613h2.9193548c.2032258.6516129.3129032 1.34516129.3129032 2.06451613 0 .71935484-.1096774 1.41290323-.3129032 2.0645161h-2.9193548z"
              ></path>
            </svg>
            <select
              class="bg-transparent focus:outline-none pl-3 cursor-pointer"
            >
              <option value="en" class="dark:text-dark-surface cursor-pointer">
                English
              </option>
              <option value="fr" class="dark:text-dark-surface cursor-pointer">
                Français
              </option>
              <option value="zh" class="dark:text-dark-surface cursor-pointer">
                简体中文
              </option>
              <option value="ja" class="dark:text-dark-surface cursor-pointer">
                日本語
              </option>
              <option value="ko" class="dark:text-dark-surface cursor-pointer">
                한국어
              </option>
              <option value="ru" class="dark:text-dark-surface cursor-pointer">
                Русский
              </option>
              <option value="id" class="dark:text-dark-surface cursor-pointer">
                Indonesian
              </option>
              <option value="pt" class="dark:text-dark-surface cursor-pointer">
                Português
              </option>
              <option value="es" class="dark:text-dark-surface cursor-pointer">
                Español
              </option>
            </select>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
