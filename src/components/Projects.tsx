import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { CustomArrow } from './CustomArrow';

interface ProjectsProps {
  isSinglePage?: boolean;
}

export default function Projects({ isSinglePage = false }: ProjectsProps) {
  return (
    <section className={`px-6 ${isSinglePage ? 'pt-8 pb-0 md:pb-0' : 'py-12 md:py-24 bg-slate-900/50'}`}>
      <style>{`
        @keyframes red-black-blink {
          0%, 100% { color: #CC2030; }
          50% { color: #1A1A1A; }
        }
        @keyframes red-black-blink-bg {
          0%, 100% { background-color: #CC2030; }
          50% { background-color: #1A1A1A; }
        }
        .animate-red-black-blink {
          animation: red-black-blink 1.5s infinite ease-in-out;
        }
        .animate-red-black-blink-bg {
          animation: red-black-blink-bg 1.5s infinite ease-in-out;
        }
        @keyframes cyan-black-blink {
          0%, 100% { color: #3B7A94; }
          50% { color: #1A1A1A; }
        }
        @keyframes cyan-black-blink-bg {
          0%, 100% { background-color: #3B7A94; }
          50% { background-color: #1A1A1A; }
        }
        .animate-cyan-black-blink {
          animation: cyan-black-blink 1.5s infinite ease-in-out;
        }
        .animate-cyan-black-blink-bg {
          animation: cyan-black-blink-bg 1.5s infinite ease-in-out;
        }
      `}</style>
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Current Project */}
        <div className="space-y-12">
          {!isSinglePage && (
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-6 text-center w-full">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  プロジェクト
                </h2>
              </div>
            </div>
          )}

          {/* PN 002 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-none bg-[#D2B48C] py-6 px-8 md:py-8 md:px-12 border border-[#8B5A2B] text-[#1A1A1A]`}
          >
            <div className="flex flex-col gap-8 md:gap-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block">クライアント</span>
                  <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block">PN 002</span>
                </div>
                <p className="text-xl font-medium flex flex-wrap items-center gap-2">
                  <span className="font-bold text-2xl flex items-center gap-2">
                    <svg viewBox="0 0 590 591" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 flex-shrink-0">
                      <path fill="currentColor" d="M32.1407 84.0966C35.9253 83.6113 45.6184 83.9524 49.7425 83.9678L84.0055 83.9825L205.46 83.9841L444.242 83.9838L522.985 83.9834C537.325 83.9809 552.184 83.7369 566.473 84.0655C561.779 88.0392 556.426 94.7513 551.83 99.3963L505.609 146.769L333.867 322.664C330.263 326.397 326.927 330.21 323.251 333.964L271.352 386.039C263.594 393.96 256.355 402.639 248.153 410.235C245.072 413.088 242.353 416.384 239.155 419.192C235.802 422.551 232.091 426.142 228.866 429.588C226.042 432.605 223.552 435.574 220.618 438.592L178.949 481.284C168.597 491.956 157.94 502.392 147.466 512.942C144.332 516.059 141.551 519.62 138.448 522.754C129.981 531.307 121.614 539.967 113.027 548.398C111.032 550.357 108.907 552.63 106.711 554.338C97.525 544.377 86.3412 534.607 76.5602 524.941C88.4236 513.431 98.8719 501.937 110.304 490.294L191.151 407.491L236.649 360.91C247.429 350.032 258.92 338.968 269.29 327.728C266.825 325.513 264.186 322.436 261.728 320.042C244.074 302.841 227.649 284.52 209.997 267.306C203.386 260.859 197.018 253.701 190.621 247.001L75.5977 128.912C71.7308 124.967 32.5184 85.5116 32.1407 84.0966ZM303.366 293.404C311.284 285.41 319.294 276.639 327.227 268.461L368.178 226.516C376.592 217.755 387.962 207.575 395.404 198.773L430.495 163.245C433.765 159.906 436.815 156.321 440.103 152.935C450.007 142.736 459.753 132.558 470.05 122.743C474.737 118.275 479.046 112.626 483.836 108.116C485.659 106.4 487.188 104.51 489.3 103.058C478.047 103.502 466.003 103.102 454.632 103.09L389.795 103.082L207.421 103.081L146.391 103.085C136.947 103.087 126.719 102.913 117.36 103.074L243.778 232.491L286.369 276.021C290.241 279.995 300.711 289.681 303.366 293.404Z" />
                    </svg>
                    株式会社ヤジルシ建築設計事務所
                  </span>
                </p>
              </div>
              
              <div className="w-full h-px bg-[#1A1A1A]/30" />
              
              <div className="space-y-4">
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block">支援内容</span>
                <p className="text-lg font-medium leading-relaxed">
                  「AI総務部」プロトタイプ構築（要件定義、業務設計、自動化ツール開発など）
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-[#1A1A1A]/30 flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16">
              <div>
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block mb-3">プロジェクト期間</span>
                <p className="text-lg font-medium">
                  2026年10月～12月
                </p>
              </div>
              <div>
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block mb-3">ステータス</span>
                <div className="flex items-center gap-2 font-bold text-lg">
                  <span className="rounded-full w-3 h-3 block bg-[#1A1A1A] flex-shrink-0" />
                  プロジェクト準備中
                </div>
              </div>
            </div>
          </motion.div>

          {/* PN 001 */}
          {isSinglePage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-none bg-[#D2B48C] py-6 px-8 md:py-8 md:px-12 border border-[#8B5A2B] text-[#1A1A1A]`}
          >
            <div className="flex flex-col gap-8 md:gap-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block">クライアント</span>
                  <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block">PN 001</span>
                </div>
                <p className="text-xl font-medium flex flex-wrap items-center gap-2">
                  <span className="font-bold text-2xl animate-cyan-black-blink flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 334 333" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 animate-cyan-black-blink">
                      <path fill="currentColor" transform="scale(1 1)" d="M160.393 24.3486C161.792 24.0896 165.176 24.1586 166.628 24.1842C174.979 24.3314 182.766 26.5818 190.098 30.5292C198.521 35.0638 205.054 41.614 209.708 49.9539C211.358 52.911 212.592 54.8191 213.605 58.1624C209.835 59.5489 207.918 61.2772 204.455 63.0336C203.257 62.3016 200.138 55.0887 198.927 53.0647C197.955 51.4708 196.833 49.9733 195.577 48.5925C176.946 27.7045 141.085 32.4691 128.938 57.4909C117.654 80.7377 118.526 113.175 138.175 131.564C140.162 133.424 142.212 135.225 144.043 137.234C144.269 120.055 144.202 108.967 134.091 93.9342C132.781 91.9472 131.352 90.0403 129.814 88.2238C129.009 87.2788 126.103 84.1453 125.684 83.331C124.352 80.7456 126.563 73.6488 127.324 70.8738C132.715 73.7361 141.388 85.0998 144.627 90.2304C156.493 109.028 157.809 132.454 152.32 153.67C146.265 175.62 131.83 203.172 111.992 215.333C84.4998 232.186 38.3553 224.924 21.2781 196.135C15.1095 187.252 13.8734 173.122 15.9829 162.816C18.4607 150.71 26.05 140.742 36.2875 134.041C38.301 132.724 44.7835 128.983 46.9861 129.461C48.157 130.418 51.7439 137.135 52.5313 138.753C35.2276 144.955 24.8241 157.221 26.3645 176.46C28.5773 204.096 62.3709 215.971 86.2198 212.612C103.168 210.225 112.64 203.333 122.92 190.043C119.063 190.493 115.201 190.261 111.369 190.516C101.024 191.205 90.3884 194.23 81.7761 200.132C79.697 201.556 77.2719 203.231 75.3011 204.827C73.7135 206.113 72.4108 208.357 70.477 209.36C68.2334 209.581 60.6778 207.797 58.7991 206.669L58.7252 206.323C58.9957 205.64 59.4132 205.01 59.9146 204.454C71.4031 191.697 85.2914 183.329 102.308 180.399C106.723 179.639 112.496 179.8 116.931 179.294C121.77 178.743 129.114 178.068 132.111 173.783C136.306 167.787 142.294 155.574 138.606 148.432C136.467 144.291 132.084 140.824 128.787 137.611C118.5 127.51 112.661 112.752 111.161 98.5909C110.041 88.0238 110.196 78.5423 113.106 68.3446C115.914 58.5034 118.561 51.3833 125.013 43.3668C133.8 32.5646 146.536 25.7183 160.393 24.3486Z" />
                      <path fill="currentColor" transform="scale(1 1)" d="M203.203 184.176C213.965 198.322 226.403 206.062 244.024 209.415C247.535 210.084 252.688 209.787 255.782 210.924C257.524 211.564 262.182 218.409 262.731 220.121C262.037 221.57 256.698 221.39 255.128 221.376C244.188 221.277 233.694 219.289 223.702 214.772C216.411 211.434 209.731 206.899 203.939 201.354C193.782 191.815 180.176 171.732 175.508 158.884C168.893 140.675 167.711 117.569 175.891 99.6646C182.92 84.2792 194.945 71.3394 209.683 63.1604C212.303 61.7892 214.974 59.906 217.791 58.9733C230.759 54.7044 244.122 53.4257 256.756 59.5038C267.775 64.805 276.201 74.3203 280.426 85.7592C284.887 97.8368 283.368 110.232 278.581 121.938C278.251 122.744 277.936 123.121 277.139 123.399C277.098 123.395 267.754 120.71 267.921 120.791C267.803 120.622 267.685 120.453 267.567 120.285C268.366 116.944 269.919 113.772 270.711 110.423C271.242 108.178 271.759 105.739 271.943 103.436C272.599 94.4331 269.669 85.5363 263.792 78.685C254.128 67.3171 239.952 63.961 225.917 68.3497C223.204 69.1983 217.898 70.9833 215.744 72.8353C214.815 73.3328 213.458 74.0126 212.647 74.6148C198.54 82.6751 188.142 95.9307 183.673 111.552C181.533 119.318 181.43 124.177 181.209 131.918C184.806 128.799 189.273 125.159 192.473 121.572C199.982 113.154 204.804 102.128 206.205 90.9476C206.503 88.5724 206.085 82.5923 207.827 81.4362C209.565 80.283 213.67 77.2914 215.397 76.4591L216.656 75.7245C218.011 77.431 217.697 78.5898 217.763 80.6689C218.467 102.662 209.365 124.055 191.504 137.279C180.799 145.205 184.98 155.833 190.535 165.363C196.98 176.275 208.055 173.035 218.641 173.912C226.466 174.56 233.868 176.8 240.861 180.362C259.616 189.756 273.863 206.225 280.461 226.136C288.828 251.945 278.955 278.098 253.082 288.231C240.311 293.233 226.088 291.208 214.11 285.041C214.757 281.955 215.892 276.97 216.963 274.135C224.532 276.976 226.567 279.151 235.663 279.775C245.414 280.443 253.82 277.155 261.059 270.515C267.854 264.184 271.882 255.431 272.27 246.152C273.362 217.773 248.714 190.6 221.59 185.321C215.88 184.21 209.094 184.378 203.203 184.176Z" />
                      <path fill="currentColor" transform="scale(1 1)" d="M172.351 206.667C174.001 203.766 176.348 201.563 179.616 200.792C186.725 199.114 192.062 203.734 196.592 208.229C204.815 216.389 210.066 226.548 212.748 237.755C217.516 257.654 215.083 280.556 204.411 298.234C197.73 309.54 186.786 318.341 173.814 321.313C162.147 323.985 149.272 322.617 138.877 316.108C129.356 310.147 122.062 300.616 118.384 289.925C118.182 289.336 118.076 287.884 118.612 287.27C119.761 286.64 126.096 283.347 127.038 283.119C128.049 283.823 130.796 291.07 131.628 292.717C143.896 316.968 178.131 317.272 192.903 295.404C203.26 280.071 206.078 261.232 202.726 243.261C200.42 230.903 193.709 217.245 182.402 210.862C178.988 231.238 187.984 247.603 201.24 262.207C201.16 267.024 199.89 270.301 199.615 275.034C187.323 266.867 174.506 245.825 171.943 231.285C170.962 225.721 170.87 221.494 170.781 215.84C171.366 211.705 170.73 211.04 172.351 206.667Z" />
                      <path fill="currentColor" transform="scale(1 1)" d="M148.05 203.593C150.914 203.053 154.826 205.078 156.503 207.343C160.531 212.783 160.047 221.397 159.417 227.73C154.77 274.47 87.9116 317.158 52.527 273.42C44.6862 263.728 41.7046 251.533 43.224 239.237C43.6455 235.826 46.1904 224.551 48.8067 222.516C49.9192 222.617 58.1472 224.461 58.5751 224.911C58.6832 225.438 58.6445 226.101 58.4226 226.587C51.9066 240.864 51.4357 253.355 61.0602 266.698C62.3373 268.274 63.7235 269.758 65.2084 271.14C85.5479 289.736 116.69 277.517 132.686 259.203C141.115 249.553 147.65 237.818 148.748 224.867C149.049 221.324 148.811 217.845 148.626 214.294C134.073 221.267 126.181 240.388 124.865 255.635C124.666 257.939 124.704 262.044 123.747 263.976C122.426 265.079 115.888 269.384 114.446 269.689C114.123 269.256 114.056 268.851 114.007 268.308C112.041 246.843 119.011 223.451 135.825 209.251C139.807 205.889 143.146 204.193 148.05 203.593Z" />
                      <path fill="currentColor" transform="scale(1 1)" d="M87.4221 55.3594C91.927 54.6278 98.0916 55.8746 102.472 56.9767C116.401 60.4808 110.921 60.9888 109.359 71.4173C98.0433 66.3956 86.5547 63.7386 75.3405 69.9452C34.9808 92.2828 62.658 146.673 97.7386 156.921C100.595 157.756 117.487 161.005 118.19 157.737C118.007 157.123 117.851 156.831 117.495 156.301C108.828 143.419 93.2154 136.879 78.1588 135.626C76.0117 135.447 73.8915 135.293 71.804 134.883C71.6061 134.69 71.4124 134.492 71.2229 134.291C69.9147 132.903 65.0227 126.348 65.0664 124.7C65.8038 124.237 66.544 124.287 67.4377 124.227C85.2785 123.667 102.292 127.511 116.395 138.963C121.824 143.372 128.154 149.737 129.044 156.987C130.131 165.847 122.68 169.334 115.053 169.882C79.8493 172.413 47.5611 140.066 44.3921 106.048C41.9546 80.1709 61.7294 57.2215 87.4221 55.3594Z" />
                      <path fill="currentColor" transform="scale(1 1)" d="M244.945 121.607C258.174 121.377 267.002 122.796 279.27 128.108C291.583 133.439 302.2 143.297 307.151 155.918C311.655 167.536 311.372 180.464 306.367 191.875C301.388 203.178 292.023 211.67 280.548 216.108C278.887 213.641 276.264 209.108 275.233 206.371C278.705 204.617 281.553 203.515 284.825 201.262C300.608 190.389 303.623 167.809 292.833 152.377C285.586 142.011 270.719 135.344 258.607 133.216C247.253 132.297 239.139 131.725 228.002 135.799C220.115 138.684 210.267 144.742 206.644 152.603C223.65 157.227 242.926 147.207 254.898 136.48C255.963 135.526 265.227 137.643 266.916 138.121L266.989 138.576C266.757 139.331 266.198 140.134 265.66 140.728C254.057 153.542 237.509 162.815 220.179 164.381C213.458 164.637 204.723 165.139 199.41 160.325C192.669 154.216 196.54 145.948 201.716 140.248C213.266 127.53 228.152 122.562 244.945 121.607Z" />
                    </svg>
                    オクトエイド
                  </span>
                  <span className="text-lg font-medium leading-relaxed text-[#1A1A1A]">（メンタルダウン予防啓発団体）</span>
                </p>
              </div>
              
              <div className="w-full h-px bg-[#1A1A1A]/30" />
              
              <div className="space-y-4">
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block">支援内容</span>
                <p className="text-lg font-medium leading-relaxed">
                  Webサイトおよび、Instagram投稿自動化ツール制作
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-[#1A1A1A]/30 flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16">
              <div>
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block mb-3">プロジェクト期間</span>
                <p className="text-lg font-medium">
                  2026年6月～9月
                </p>
              </div>
              <div>
                <span className="text-[#1A1A1A]/70 text-sm font-medium tracking-wider block mb-3">ステータス</span>
                <div className="flex items-center gap-2 font-bold text-lg animate-cyan-black-blink">
                  <span className="rounded-full w-3 h-3 block animate-cyan-black-blink-bg flex-shrink-0" />
                  Web公開準備中・伴走支援中
                </div>
              </div>
            </div>
          </motion.div>
          )}
          
          {!isSinglePage && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-end pt-4"
            >
              <Link 
                to="/contact"
                className="group flex items-center gap-4 md:gap-5"
              >
                <div className="flex flex-col items-end gap-0.5 text-right">
                  <span className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-[#D2B48C] transition-colors">Request</span>
                  <span className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D2B48C] transition-colors tracking-tight">支援をご希望の方</span>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#D2B48C] flex items-center justify-center transition-all duration-300 group-hover:scale-125 shadow-lg shadow-[#D2B48C]/20 flex-shrink-0">
                  <CustomArrow className="w-[40%] h-auto text-white ml-[12%]" />
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
