import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default ({ mode })  => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    base: `${env.VITE_BASE_PATH}`,
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT),
      host: true,
      cors: true,
      allowedHosts: ['proyectos.fireploy.online'],
      historyApiFallback: true
    },
    preview: {
      port: parseInt(env.VITE_PORT),
      host: true,  
      cors: true,
      allowedHosts: ['proyectos.fireploy.online'],
       historyApiFallback: true
    },
  })
   
}
