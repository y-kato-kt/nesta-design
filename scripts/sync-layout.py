"""共通HTMLを全ページへ反映: python scripts/sync-layout.py

生成済みHTMLはそのままブラウザで開けます。ビルドやサーバーは不要です。
ヘッダー・フッターはtemplates内のファイルを編集し、このスクリプトを実行します。
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent


def sync_layout():
    for page in ROOT.glob('*.html'):
        source = page.read_text(encoding='utf-8')
        active_page = 'works.html' if page.name == 'works-detail.html' else page.name
        for part in ('header', 'footer'):
            template = (ROOT / 'templates' / f'{part}.html').read_text(encoding='utf-8').strip()
            template = template.replace(f'href="{active_page}"', f'href="{active_page}" aria-current="page"')
            # TOPリンクはブランドロゴなので、ナビのactive表現を付けない。
            if page.name == 'index.html':
                template = template.replace(' aria-current="page"', '')
            pattern = rf'<!-- shared:{part}:start -->.*?<!-- shared:{part}:end -->'
            replacement = f'<!-- shared:{part}:start -->\n{template}\n<!-- shared:{part}:end -->'
            source, count = re.subn(pattern, lambda _: replacement, source, flags=re.S)
            if count != 1:
                raise ValueError(f'{page.name}: 共通{part}のマーカーが見つかりません')
        page.write_text(source, encoding='utf-8')
        print(f'Updated: {page.name}')


if __name__ == '__main__':
    sync_layout()
