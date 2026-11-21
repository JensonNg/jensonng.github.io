
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite';
  import path from 'path';

  export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'lucide-react@0.487.0': 'lucide-react',
        'figma:asset/c74ad8233c7850b416c0d322784aaae053a99f61.png': path.resolve(__dirname, './src/assets/c74ad8233c7850b416c0d322784aaae053a99f61.png'),
        'figma:asset/b9d29cf634fdf1ebba58a9a6471bb26ba1e2f1c5.png': path.resolve(__dirname, './src/assets/b9d29cf634fdf1ebba58a9a6471bb26ba1e2f1c5.png'),
        'figma:asset/84ace3ae11e9f0f382a10a4ccc3eae5ef42aa9ac.png': path.resolve(__dirname, './src/assets/84ace3ae11e9f0f382a10a4ccc3eae5ef42aa9ac.png'),
        'figma:asset/47f32426d8547b89328c9ab1d8fee70e80030de1.png': path.resolve(__dirname, './src/assets/47f32426d8547b89328c9ab1d8fee70e80030de1.png'),
        'figma:asset/4125bcc198a601d52d88051146403a12d203cde7.png': path.resolve(__dirname, './src/assets/4125bcc198a601d52d88051146403a12d203cde7.png'),
        'figma:asset/4124704a542996e3710071803911cce88096775c.png': path.resolve(__dirname, './src/assets/4124704a542996e3710071803911cce88096775c.png'),
        'figma:asset/1e960cafd215c602f918461bdf659ed69ec10c28.png': path.resolve(__dirname, './src/assets/1e960cafd215c602f918461bdf659ed69ec10c28.png'),
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@jsr/supabase__supabase-js@2.49.8': '@jsr/supabase__supabase-js',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: true,
    },
  });