import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="main">
        <p className="title">利用規約</p>
        <p className="time">有効日：[本日限り]</p>
        <span>
          <p className="smallTitle">1. 受諾</p>
          <p>こちらのサービスを利用することにより、以下の利用規約に同意するものとみなされます。もし、この利用規約に同意できない場合は、サービスの利用を中止してください。</p>
        </span>
        <span>
          <p className="smallTitle">2. 利用条件の変更</p>
          <p>当クラスは、利用規約を予告なく変更できる権利を留保します。変更内容は当黒板に掲示され、変更後にサービスを利用することは変更に同意するものとみなされます。利用規約の変更については、定期的に確認することをお勧めします。</p>
        </span>
        <span>
          <p className="smallTitle">3. サービスの提供</p>
          <p>当クラスは、本サービスを提供する義務を負いません。また、サービス提供の際に障害や中断が発生する可能性があることを理解し、当クラスはその責任を負いません。</p>
        </span>
        <span>
          <p className="smallTitle">4. ユーザーの義務</p>
          <ul>
            <li>サービスの正当な目的でのみ利用すること</li>
            <li>品位を下げるような落書き</li>
            <li> 規定範囲外への故意な落書き、予想のつかない行動による人為的被害を起こす等の迷惑行為を行わないこと</li>
            <li>著作権、商標、プライバシー権などを一切気にせず楽しむこと。</li>
            <li> 物品の持ち出し、破壊行為、注意事項の改ざん、その他の違法行為を行わないこと</li>
          </ul>
        </span>
        <span>
          <p className="smallTitle">5. コンテンツ</p>
          <p>こちらのサービスを利用することにより、以下の利用規約に同意するものとみなされます。もし、この利用規約に同意できない場合は、サービスの利用を中止してください。</p>
        </span>
        <span>
          <p className="smallTitle">6. 知的財産権</p>
          <p>本サービスに関連するすべての知的財産権は当クラスに帰属し、ユーザーにはサービスの利用に関する限定的なライセンスが付与されます。</p>
        </span>
        <span>
          <p className="smallTitle">7. プライバシーポリシー</p>
          <p>ユーザーのプライバシーに関しては、当クラスのプライバシーポリシーが適用されます。</p>
        </span>
        <span>
          <p className="smallTitle">8. 免責事項</p>
          <p>当クラスは、サービスの利用によって生じるいかなる損害に対しても責任を負いません。お前らの勝手です。</p>
        </span>
        <span>
          <p className="smallTitle">9. 紛争解決</p>
          <p>本利用規約に関する紛争は、調停または仲裁によって解決されるものとし、日本の法律が適用されることとします。</p>
        </span>
        <span>
          <p className="smallTitle">10. お問い合わせ</p>
          <p>利用規約に関するご質問やお問い合わせは、以下のHPまでお願いいたします。</p>
          <p>https://www.meiden.ed.jp/</p>
        </span>
        <span>
          <p className="smallTitle">11. 歴史</p>
          <ul className="smallTitle">
            <li>旧石器時代から古代:
              <ul>
                <li className="description">旧石器時代には、洞窟壁に描かれた最古の絵画が発見されています。これらの絵画は、狩猟や動物の描写が多かった。</li>
                <li className="description">古代エジプトや古代メソポタミアなどの文明では、宗教的な目的や歴史的な出来事を描いた壁画や彫刻が発展しました。</li>
              </ul>
            </li>
            <li>古代ギリシャと古代ローマ:
              <ul>
                <li className="description">古代ギリシャでは、美的な価値と対象の現実的な表現が重要視され、彫刻や陶芸などの芸術も発展しました。
                </li>
                <li className="description">古代ローマはギリシャの影響を受け、彫刻やモザイクなどが隆盛しました。</li>
              </ul>
            </li>
            <li>ビザンティン帝国:
              <ul>
                <li className="description">ビザンティン帝国では、宗教的な絵画が重要視され、イコン（聖画）が描かれました。</li>
              </ul>
            </li>
            <li>中世とルネサンス:
              <ul>
                <li className="description">中世ヨーロッパでは、宗教的テーマが支配的で、キリスト教教会のために多くの絵画が制作されました。</li>
                <li className="description">ルネサンス期には、芸術家たちが個人的な表現と視覚的なリアリズムに焦点を当て、絵画の技術とスタイルが飛躍的に進化しました。レオナルド・ダ・ヴィンチ、ミケランジェロ、ラファエロなどがこの時期の代表的な芸術家です</li>
              </ul>
            </li>
            <li>バロックからロココ:
              <ul>
                <li className="description">バロック期には、感情豊かで劇的な絵画が主流となりました。カラバッジョやレンブラントなどが活躍しました。</li>
                <li className="description">ロココ期には、優美さや装飾性が重要視され、フラゴナールやベルトランドが活躍しました。</li>
              </ul>
            </li>
            <li>近代美術:
              <ul>
                <li className="description">19世紀には、印象派（モネ、ルノワール）、ポスト印象派（セザンヌ、ゴッホ）などが登場し、絵画のスタイルが多様化しました</li>
                <li className="description">20世紀には、抽象芸術（ピカソ、カンディンスキー）、シュルレアリスム（ダリ、マグリット）など、さまざまな芸術運動が生まれました。</li>
              </ul>
            </li>
            <li>現代美術:
              <ul>
                <li className="description">現代美術では、さまざまなスタイルやメディアが採用され、芸術家たちは新たな表現方法を模索しています。コンセプチュアルアートやポップアートなどが代表的です。</li>
              </ul>
            </li>
          </ul>
          <p>絵画の歴史は多様で豊かであり、地域や文化によって異なる発展を遂げてきました。現代ではデジタルアートなど、新しいテクノロジーを活用したアート形式も登場しており、絵画の進化は続いています
            これをもって今年のテーマの「歴史」を達成したものとする</p>
        </span>
      </div>
      <Button variant="contained" color="success" size='large'>同意する</Button>
    </main>
  )
}