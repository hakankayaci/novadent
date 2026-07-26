import os
from PIL import Image, ImageDraw, ImageFont

base_dir = r'c:\Users\Hakan\Desktop\PROJELER\canbazvet'
brand_dir = os.path.join(base_dir, 'public', 'images', 'brand')
og_dir = os.path.join(base_dir, 'public', 'images', 'og')
public_dir = os.path.join(base_dir, 'public')

os.makedirs(brand_dir, exist_ok=True)
os.makedirs(og_dir, exist_ok=True)

# 1. Horizontal SVG Logo
svg_logo = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 160" width="100%" height="100%">
  <defs>
    <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C7E34B" />
      <stop offset="100%" stop-color="#9ACD32" />
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#006654" />
      <stop offset="100%" stop-color="#00352C" />
    </linearGradient>
  </defs>

  <g transform="translate(10, 10)">
    <path d="M 65 15 C 30 15, 10 40, 10 75 C 10 115, 45 135, 75 135 C 110 135, 130 110, 130 75 C 130 55, 115 35, 95 25" 
          fill="none" stroke="#004D40" stroke-width="12" stroke-linecap="round" />
    <path d="M 75 135 C 115 135, 138 105, 138 70 C 138 45, 120 20, 90 12" 
          fill="none" stroke="url(#limeGrad)" stroke-width="10" stroke-linecap="round" />
    <path d="M 70 50 C 60 38, 42 50, 55 68 L 70 85 L 85 68 C 98 50, 80 38, 70 50 Z" 
          fill="#004D40" />
    <circle cx="56" cy="44" r="5.5" fill="#B9D63C" />
    <circle cx="70" cy="38" r="6" fill="#B9D63C" />
    <circle cx="84" cy="44" r="5.5" fill="#B9D63C" />
    <path d="M 67 60 H 73 V 72 H 67 Z M 64 63 H 76 V 69 H 64 Z" fill="#E2292E" />
  </g>

  <text x="165" y="92" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" 
        font-weight="800" font-size="74" fill="#004D40" letter-spacing="-1.5">Canbaz</text>
  
  <text x="435" y="92" font-family="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif" 
        font-weight="800" font-size="74" fill="#B9D63C" letter-spacing="-1.5">Vet</text>

  <rect x="165" y="110" width="285" height="28" rx="4" fill="#004D40" />
  <text x="177" y="130" font-family="'Plus Jakarta Sans', system-ui, sans-serif" 
        font-weight="700" font-size="16" fill="#FFFFFF" letter-spacing="2.5">VETERİNER KLİNİĞİ</text>
</svg>
'''

with open(os.path.join(brand_dir, 'canbazvet-logo-horizontal.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_logo)

# Horizontal Light (white text) SVG Logo for dark backgrounds
svg_logo_light = svg_logo.replace('fill="#004D40"', 'fill="#FFFFFF"').replace('stroke="#004D40"', 'stroke="#FFFFFF"')
with open(os.path.join(brand_dir, 'canbazvet-logo-light.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_logo_light)

# Icon SVG
svg_icon = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="100%" height="100%">
  <rect width="160" height="160" rx="36" fill="#00352C" />
  <defs>
    <linearGradient id="limeGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C7E34B" />
      <stop offset="100%" stop-color="#9ACD32" />
    </linearGradient>
  </defs>
  <g transform="translate(5, 5)">
    <path d="M 75 135 C 115 135, 138 105, 138 70 C 138 45, 120 20, 90 12" 
          fill="none" stroke="url(#limeGradIcon)" stroke-width="12" stroke-linecap="round" />
    <path d="M 65 15 C 30 15, 10 40, 10 75 C 10 115, 45 135, 75 135" 
          fill="none" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" />
    <path d="M 70 50 C 60 38, 42 50, 55 68 L 70 85 L 85 68 C 98 50, 80 38, 70 50 Z" fill="#B9D63C" />
    <circle cx="56" cy="44" r="5.5" fill="#FFFFFF" />
    <circle cx="70" cy="38" r="6" fill="#FFFFFF" />
    <circle cx="84" cy="44" r="5.5" fill="#FFFFFF" />
    <path d="M 67 60 H 73 V 72 H 67 Z M 64 63 H 76 V 69 H 64 Z" fill="#E2292E" />
  </g>
</svg>
'''

with open(os.path.join(brand_dir, 'canbazvet-icon.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_icon)

# Generate PNG Favicon and Icon variants using PIL
icon_im = Image.new('RGBA', (512, 512), color=(0, 53, 44, 255))
draw_icon = ImageDraw.Draw(icon_im)
draw_icon.rounded_rectangle([20, 20, 492, 492], radius=90, fill=(0, 77, 64, 255), outline=(185, 214, 60, 255), width=16)

# Save icon sizes
icon_im.save(os.path.join(public_dir, 'icon-512.png'))
icon_im.resize((192, 192)).save(os.path.join(public_dir, 'icon-192.png'))
icon_im.resize((180, 180)).save(os.path.join(public_dir, 'apple-touch-icon.png'))
icon_im.resize((32, 32)).save(os.path.join(public_dir, 'favicon.ico'))
icon_im.save(os.path.join(brand_dir, 'canbazvet-icon.png'))

# Generate Open Graph image (1200x630) using PIL
og_im = Image.new('RGB', (1200, 630), color='#00352C')
draw = ImageDraw.Draw(og_im)

draw.ellipse([750, -120, 1450, 580], fill='#004D40')
draw.ellipse([820, -50, 1380, 510], outline='#B9D63C', width=12)

ext_path = os.path.join(public_dir, 'images', 'clinic', 'canbazvet-dis-cephe-tabela.webp')
if os.path.exists(ext_path):
    ext_im = Image.open(ext_path)
    ext_im = ext_im.resize((520, 460))
    mask = Image.new('L', (520, 460), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, 520, 460], radius=24, fill=255)
    og_im.paste(ext_im, (620, 85), mask)

try:
    font_large = ImageFont.truetype('arialbd.ttf', 64)
    font_sub = ImageFont.truetype('arialbd.ttf', 30)
    font_body = ImageFont.truetype('arial.ttf', 26)
    font_badge = ImageFont.truetype('arialbd.ttf', 22)
except:
    font_large = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_body = ImageFont.load_default()
    font_badge = ImageFont.load_default()

draw.text((70, 110), 'CanbazVet', fill='#FFFFFF', font=font_large)
draw.text((380, 110), 'Vet', fill='#B9D63C', font=font_large)

draw.rounded_rectangle([70, 195, 360, 235], radius=6, fill='#004D40')
draw.text((82, 203), 'VETERİNER KLİNİĞİ', fill='#B9D63C', font=font_badge)

draw.text((70, 275), 'Veteriner Hekim Berk Canbaz', fill='#FFFFFF', font=font_sub)
draw.text((70, 320), 'Edirne · Kedi ve Köpek Sağlığı', fill='#B9D63C', font=font_body)
draw.text((70, 360), 'Şükrüpaşa Mahallesi, İlhami Ertem Cd.', fill='#E0F2EF', font=font_body)

draw.rounded_rectangle([70, 430, 540, 505], radius=16, fill='#E2292E')
draw.text((95, 452), '7/24 ACİL HAT: 0541 325 76 82', fill='#FFFFFF', font=font_badge)

og_im.save(os.path.join(og_dir, 'canbazvet-og.jpg'), 'JPEG', quality=92)
print('Assets generated successfully!')
