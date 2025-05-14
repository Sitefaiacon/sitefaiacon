import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Steps, Step } from "@/components/ui/steps"
import { Button } from "@/components/ui/button"
import { ArrowRight, BellIcon as Vercel, Terminal, Code } from "lucide-react"

export default function DeploymentGuide() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Deploy Your Next.js Project</h1>

      <Card>
        <CardHeader>
          <CardTitle>Deployment Options</CardTitle>
          <CardDescription>Choose the deployment method that works best for you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Vercel className="h-5 w-5" />
                  Vercel (Recommended)
                </CardTitle>
                <CardDescription>Easiest deployment option with best performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Steps>
                  <Step title="Connect to GitHub">Push your code to a GitHub repository</Step>
                  <Step title="Import to Vercel">Go to vercel.com and import your repository</Step>
                  <Step title="Configure">Keep default settings or customize as needed</Step>
                  <Step title="Deploy">Click deploy and wait for your site to go live</Step>
                </Steps>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Deploy to Vercel
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Manual Deployment
                </CardTitle>
                <CardDescription>Deploy to any hosting provider</CardDescription>
              </CardHeader>
              <CardContent>
                <Steps>
                  <Step title="Build your project">
                    Run <code className="bg-muted px-1 rounded">npm run build</code>
                  </Step>
                  <Step title="Test locally">
                    Run <code className="bg-muted px-1 rounded">npm start</code> to verify
                  </Step>
                  <Step title="Upload files">
                    Upload the <code className="bg-muted px-1 rounded">.next</code>,{" "}
                    <code className="bg-muted px-1 rounded">public</code> folders and configuration files
                  </Step>
                  <Step title="Configure server">Set up Node.js environment and start command</Step>
                </Steps>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Documentation
                  <Code className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Before You Deploy</CardTitle>
          <CardDescription>Recommended steps to ensure a successful deployment</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">✓</span>
              <span>Clean up your dependencies - remove unnecessary packages like Vue and Svelte</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">✓</span>
              <span>Replace "latest" versions with specific version numbers</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">✓</span>
              <span>Add environment variables if your application requires them</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">✓</span>
              <span>Update next.config.js with any necessary deployment configurations</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
