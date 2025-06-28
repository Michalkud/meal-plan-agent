export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-4rem)]">
          {/* Chat & Trace Panel */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Chat & Trace</h2>
            <div className="h-full flex flex-col">
              <div className="flex-1 bg-muted rounded-lg p-4 mb-4">
                <p className="text-muted-foreground">
                  Agent conversation will appear here...
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-input rounded-md bg-background"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Context Panel */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Context Panel</h2>
            <div className="space-y-4">
              {/* Basket Widget */}
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-semibold mb-2">Shopping Basket</h3>
                <p className="text-sm text-muted-foreground">No items yet</p>
              </div>

              {/* Macro Dashboard */}
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-semibold mb-2">Macro Dashboard</h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-medium">Calories</div>
                    <div className="text-muted-foreground">0 / 2000</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">Protein</div>
                    <div className="text-muted-foreground">0 / 150g</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">Carbs</div>
                    <div className="text-muted-foreground">0 / 250g</div>
                  </div>
                </div>
              </div>

              {/* Meal Plan */}
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-semibold mb-2">Today's Meal Plan</h3>
                <p className="text-sm text-muted-foreground">No meal plan yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 