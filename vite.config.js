import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default ({ mode })  => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT),
      host: true,
      cors: true,
      allowedHosts: [`${env.VITE_FIREPLOY_HOST}`],
      historyApiFallback: true
    },
    preview: {
      port: parseInt(env.VITE_PORT),
      host: true,  
      cors: true,
      allowedHosts: [`${env.VITE_FIREPLOY_HOST}`],
       historyApiFallback: true
    },
  })
   
}
