import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <NavigationMenuTrigger  href="/">Home</NavigationMenuTrigger> */}
          {/* <NavigationMenuContent> */}
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          {/* </NavigationMenuContent> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <NavigationMenuTrigger>About</NavigationMenuTrigger> */}
          {/* <NavigationMenuContent> */}
            <NavigationMenuLink href="/RNG">RNG</NavigationMenuLink>
          {/* </NavigationMenuContent> */}
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}