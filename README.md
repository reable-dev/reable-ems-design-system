# @reable/ems-design-system

## reable ems 디자인 시스템 라이브러리입니다.

# Reable BEMS Design System

### Installation

```shell
$ npm install @reable/ems-design-system
# or
$ yarn add @reable/ems-design-system
```

### **Getting started**

To start using the components, first wrap your application in a provider provided by **@reable/ems-design-system**

```tsx
import { ReableEMSProvider } from '@reable/ems-design-system';

const App = ({ children }) => {
  return <ReableEMSProvider>{children}</ReableEMSProvider>;
};
```

After adding the provider, now you can start using components like this.

```tsx
import { Button } from '@reable/ems-design-system';

function App() {
  return (
    <Button variant="primary" size="lg">
      Hello World
    </Button>
  );
}
```

### Links

- [storybook](https://6663e874b3049ef0a2884f7c-nprzxygixy.chromatic.com/)
